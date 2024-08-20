
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.webdriver import WebDriver as ChromeDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait


class ParserDriver(ChromeDriver):
    def __init__(self):
        super().__init__(service=ChromeService())

    def get_source_html(self, url) -> str:
        try:
            self.get(url)
            WebDriverWait(
                self, 60,
            ).until(
                expected_conditions.presence_of_element_located(
                    (By.TAG_NAME, 'html')
                )
            )
            return self.page_source
        except Exception as ex:
            return ex.args[0]
        finally:
            self.close()
            self.quit()
