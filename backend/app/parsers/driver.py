import time

from fake_useragent import UserAgent
from selenium_stealth import stealth
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.webdriver import WebDriver as ChromeDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait


class ParserDriver(ChromeDriver):
    def __init__(self):
        super().__init__(service=ChromeService(), options=self.get_driver_options())
        stealth(
            self,
            languages=["en-US", "en"],
            vendor="Google Inc.",
            platform="Win32",
            webgl_vendor="Intel Inc.",
            renderer="Intel Iris OpenGL Engine",
            fix_hairline=True,
        )

    def get_driver_options(self):
        options = Options()
        options.add_argument("start-maximized")
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        options.add_experimental_option('useAutomationExtension', False)

        return options

    @staticmethod
    def get_random_chrome_user_agent():
        user_agent = UserAgent(browsers='chrome', os='windows', platforms='pc')
        return user_agent.random

    def scroll_window(self):
        y = 1000
        for timer in range(0, 10):
            self.execute_script("window.scrollTo(0, " + str(y) + ")")
            y += 1000
            time.sleep(1)

    def get_source_html(self, url, lazy_load: bool = False) -> str:
        try:
            self.get(url)
            window = WebDriverWait(
                self, 60,
            ).until(
                expected_conditions.presence_of_element_located(
                    (By.TAG_NAME, 'html')
                )
            )

            if lazy_load:
                time.sleep(10)
                self.scroll_window()

            return self.page_source
        except Exception as ex:
            return ex.args[0]
        finally:
            self.close()
            self.quit()
