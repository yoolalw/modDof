import pytest
import webdriver_manager
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import time

@pytest.fixture
def chrome():
    service = webdriver.ChromeService()
    chrome = webdriver.Chrome(service=service)
    chrome.implicitly_wait(3)

    yield chrome
    chrome.quit()

@pytest.mark.usefixtures("chrome")
def test_itens_displayed(chrome):

    chrome.get('http://127.0.0.1:5500/home.html')

    time.sleep(3)
    chrome.find_element(By.ID, "buttonCa").is_displayed()
    chrome.find_element(By.ID, "buttonKb").is_displayed()
    chrome.find_element(By.ID, "rel").is_displayed()



@pytest.mark.usefixtures("chrome")
def test_waiting_url_bca(chrome):

    chrome.get('http://127.0.0.1:5500/home.html')

    bCa = chrome.find_element(By.ID, "buttonCa")
    bCa.click()

    WebDriverWait(chrome, 5).until(EC.url_to_be('http://127.0.0.1:5500/ca.html'))

@pytest.mark.usefixtures("chrome")
def test_verify_msg(chrome):

    chrome.get('http://127.0.0.1:5500/ca.html')

    input = chrome.find_element(By.ID, "input")
    time.sleep(2)
    btn = chrome.find_element(By.ID, "button").click()

    time.sleep(1)
    msg = chrome.find_element(By.ID, "msg")
    assert msg.text == "O campo precisa estar preenchido."


@pytest.mark.usefixtures("chrome")
def test_inserting(chrome):

    chrome.get('http://127.0.0.1:5500/ca.html')

    input = chrome.find_element(By.ID, "input").send_keys("Atividade 1")
    time.sleep(2)
    btn = chrome.find_element(By.ID, "button").click()

