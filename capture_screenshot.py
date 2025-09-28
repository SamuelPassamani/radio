# -*- coding: utf-8 -*-

import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    """
    Função principal que inicia o navegador, navega até a página e captura a tela.
    """
    async with async_playwright() as p:
        # Inicia o navegador Chromium em modo headless (sem interface gráfica)
        browser = await p.chromium.launch()

        # Cria uma nova página no navegador
        page = await browser.new_page()

        # Constrói o caminho absoluto para o arquivo index.html
        # Isso garante que o script funcione independentemente de onde for executado
        file_path = f"file://{os.path.abspath('index.html')}"

        # Navega até o arquivo local index.html
        print(f"Navegando para: {file_path}")
        await page.goto(file_path)

        # Espera um pouco para garantir que todos os elementos da página sejam carregados
        await page.wait_for_load_state('networkidle')
        await asyncio.sleep(5)  # Espera adicional de 5 segundos para renderização completa

        # Captura uma captura de tela da página inteira
        screenshot_path = "post_refactor_screenshot.png"
        print(f"Capturando a tela e salvando como: {screenshot_path}")
        await page.screenshot(path=screenshot_path, full_page=True)

        # Fecha o navegador
        await browser.close()

        print("Captura de tela realizada com sucesso!")

if __name__ == "__main__":
    # Executa a função principal de forma assíncrona
    asyncio.run(main())