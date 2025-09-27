import os
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to the index.html file
        current_dir = os.getcwd()
        file_path = f"file://{os.path.join(current_dir, 'index.html')}"

        page.goto(file_path)

        # Wait for the page's 'load' event to fire. This is better than 'networkidle'
        # because the audio stream prevents the network from ever being truly idle.
        page.wait_for_load_state('load')

        # Click the button to open the player
        player_toggle = page.locator(".closeOpenPlay")
        player_toggle.click()

        # Wait for the slide-in animation to complete
        page.wait_for_timeout(500)

        # Set a reasonable viewport size to capture the desktop layout
        page.set_viewport_size({"width": 1920, "height": 4000}) # Height is large to capture the whole page

        # Take a screenshot
        screenshot_path = "jules-scratch/verification/verification.png"
        page.screenshot(path=screenshot_path, full_page=True)

        browser.close()
        print(f"Screenshot saved to {screenshot_path}")

if __name__ == "__main__":
    run()