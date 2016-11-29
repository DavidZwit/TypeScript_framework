class Input {

    private keysDown : [boolean];
    private keysUp : [number];
    private keysPressed : [number];

    private buttonsDown : [boolean];
    private buttonsUp : [number];
    private buttonsPressed : [number];

    //--------------\\
    //Keyboard buttons
    //--------------\\

    static getKeyPress (keycode:number) : boolean {
        for (let i = s_InputsListener.keysPressed.length -1; i > 0; i--)
            if (s_InputsListener.keysPressed[i] == keycode) return true;
        return false;
    }

    static getKeyUp (keycode:number) : boolean {
        for (let i = s_InputsListener.keysUp.length -1; i > 0; i--)
            if (s_InputsListener.keysUp[i] == keycode) return true;
        return false;
    }

    static getKeyDown (keycode : number) : boolean {
        return s_InputsListener.keysDown[keycode];
    }

    static get anyKeyDown () : boolean {
        return s_InputsListener.keysPressed.length > 1 ? true : false;
    }

    static get anyKeyUp () : boolean {
        return s_InputsListener.keysUp.length > 1 ? true : false;
    }



    constructor () {

        this.keysDown = [false];
        for ( let i = 0; i < 222; i++ ) this.keysDown.push(false);

        this.keysUp = [0];
        this.keysPressed = [0];

        window.addEventListener('keydown', this.KeyDown);
        window.addEventListener('keyup', this.KeyUp);

        window.addEventListener('mousedown', this.MouseDown);
        window.addEventListener('mouseup', this.MouseUp);
        window.addEventListener('mousemove', this.MouseMove);

        game.l_Input.addFunction(2, () => {

            this.keysUp = [0];
            this.keysPressed = [0];

            return 0;
        }, "InputCanceler");
    }

    KeyDown (e) {
        if (s_InputsListener.keysDown[e.keyCode] == false) {

            s_InputsListener.keysDown[e.keyCode] = true;
            s_InputsListener.keysPressed.push(e.keyCode)

        }
    }

    KeyUp (e) {
        s_InputsListener.keysDown[e.keyCode] = false;
        s_InputsListener.keysUp.push(e.keyCode);
    }


    MouseDown (e) {

    }

    MouseUp (e) {

    }

    MouseMove (e) {

    }
}

let s_InputsListener = new Input();

enum KeyCode {
      BACKSPACE = 8,
      TAB = 9,
      ENTER = 13,
      SHIFT = 16,
      CTRL = 17,
      ALT = 18,
      PAUSE = 19,
      CAPS_LOCK = 20,
      ESCAPE = 27,
      SPACE = 32,
      PAGE_UP = 33,
      PAGE_DOWN = 34,
      END = 35,
      HOME = 36,
      LEFT_ARROW = 37,
      UP_ARROW = 38,
      RIGHT_ARROW = 39,
      DOWN_ARROW = 40,
      INSERT = 45,
      DELETE = 46,
      KEY_0 = 48,
      KEY_1 = 49,
      KEY_2 = 50,
      KEY_3 = 51,
      KEY_4 = 52,
      KEY_5 = 53,
      KEY_6 = 54,
      KEY_7 = 55,
      KEY_8 = 56,
      KEY_9 = 57,
      A = 65,
      B = 66,
      C = 67,
      D = 68,
      E = 69,
      F = 70,
      G = 71,
      H = 72,
      I = 73,
      J = 74,
      K = 75,
      L = 76,
      M = 77,
      N = 78,
      O = 79,
      P = 80,
      Q = 81,
      R = 82,
      S = 83,
      T = 84,
      U = 85,
      V = 86,
      W = 87,
      X = 88,
      Y = 89,
      Z = 90,
      LEFT_META = 91,
      RIGHT_META = 92,
      SELECT = 93,
      NUMPAD_0 = 96,
      NUMPAD_1 = 97,
      NUMPAD_2 = 98,
      NUMPAD_3 = 99,
      NUMPAD_4 = 100,
      NUMPAD_5 = 101,
      NUMPAD_6 = 102,
      NUMPAD_7 = 103,
      NUMPAD_8 = 104,
      NUMPAD_9 = 105,
      MULTIPLY = 106,
      ADD = 107,
      SUBTRACT = 109,
      DECIMAL = 110,
      DIVIDE = 111,
      F1 = 112,
      F2 = 113,
      F3 = 114,
      F4 = 115,
      F5 = 116,
      F6 = 117,
      F7 = 118,
      F8 = 119,
      F9 = 120,
      F10 = 121,
      F11 = 122,
      F12 = 123,
      NUM_LOCK = 144,
      SCROLL_LOCK = 145,
      SEMICOLON = 186,
      EQUALS = 187,
      COMMA = 188,
      DASH = 189,
      PERIOD = 190,
      FORWARD_SLASH = 191,
      GRAVE_ACCENT = 192,
      OPEN_BRACKET = 219,
      BACK_SLASH = 220,
      CLOSE_BRACKET = 221,
      SINGLE_QUOTE = 222
    };
