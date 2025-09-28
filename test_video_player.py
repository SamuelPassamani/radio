import unittest
import os
import re

class TestVideoPlayer(unittest.TestCase):

    def test_iframe_src_is_correct(self):
        """
        Tests if the iframe src in index.html points to the correct YouTube URL.
        This test will fail before the fix is applied.
        """
        try:
            with open("index.html", "r", encoding="utf-8") as f:
                content = f.read()
        except FileNotFoundError:
            self.fail("index.html not found.")

        # Find the iframe for the video player
        # A simple string search is sufficient and robust for this case.
        expected_iframe_src = "src=\"https://www.youtube.com/embed/0KSOMA3QBU0\""
        buggy_iframe_src = "src=\"components/0KSOMA3QBU0.html\""

        self.assertIn(expected_iframe_src, content, f"The iframe src should be '{expected_iframe_src}'. Found '{buggy_iframe_src}' instead.")

if __name__ == '__main__':
    unittest.main()