window.addEventListener('load', () => {
    Time.frameCount = 0;
    let startGame = Date.now();
    Time.gameTime = 0;
    Time.lastFrameTime = startGame - Date.now();
    Time.deltaTime = 0;
    game.loadScene("mainScene");
    !function loop() {
        Time.gameTime = (Date.now() - startGame) / 100;
        Time.deltaTime = Time.gameTime - Time.lastFrameTime;
        Time.frameCount++;
        game.coreUpdate();
        window.requestAnimationFrame(loop);
        Time.lastFrameTime = Time.gameTime;
    }();
});
//# sourceMappingURL=script.js.map