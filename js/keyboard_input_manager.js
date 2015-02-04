function KeyboardInputManager() {
  this.events = {};

  if (window.navigator.msPointerEnabled) {
    //Internet Explorer 10 style
    this.eventTouchstart    = "MSPointerDown";
    this.eventTouchmove     = "MSPointerMove";
    this.eventTouchend      = "MSPointerUp";
  } else {
    this.eventTouchstart    = "touchstart";
    this.eventTouchmove     = "touchmove";
    this.eventTouchend      = "touchend";
  }

  this.listen();
}

KeyboardInputManager.prototype.on = function (event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(callback);
};

KeyboardInputManager.prototype.emit = function (event, data) {
  var callbacks = this.events[event];
  if (callbacks) {
    callbacks.forEach(function (callback) {
      callback(data);
    });
  }
};

KeyboardInputManager.prototype.listen = function () {
  var self = this;

  var map = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    75: 0, // Vim up
    76: 1, // Vim right
    74: 2, // Vim down
    72: 3, // Vim left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3  // A
  };

  // Respond to direction keys
  document.addEventListener("keydown", function (event) {
    var modifiers = event.altKey || event.ctrlKey || event.metaKey ||
                    event.shiftKey;
    var mapped    = map[event.which];

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    // Ignore the event if it's happening in a text field
    if (self.targetIsInput(event)) return;

>>>>>>> 0fc435451731c83d13cef40ebb46562b50a8efc0
>>>>>>> 11e226b056c274ba3f9025b16fa8067b1eb2f13d
    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault();
        self.emit("move", mapped);
      }
    }

    // R key restarts the game
    if (!modifiers && event.which === 82) {
      self.restart.call(self, event);
    }
  });

  // Respond to button presses
  this.bindButtonPress(".retry-button", this.restart);
  this.bindButtonPress(".restart-button", this.restart);
  this.bindButtonPress(".keep-playing-button", this.keepPlaying);

  // Respond to swipe events
  var touchStartClientX, touchStartClientY;
  var gameContainer = document.getElementsByClassName("game-container")[0];

  gameContainer.addEventListener(this.eventTouchstart, function (event) {
    if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
<<<<<<< HEAD
        event.targetTouches > 1) {
      return; // Ignore if touching with more than 1 finger
=======
<<<<<<< HEAD
        event.targetTouches > 1) {
      return; // Ignore if touching with more than 1 finger
=======
        event.targetTouches > 1 ||
        self.targetIsInput(event)) {
      return; // Ignore if touching with more than 1 finger or touching input
>>>>>>> 0fc435451731c83d13cef40ebb46562b50a8efc0
>>>>>>> 11e226b056c274ba3f9025b16fa8067b1eb2f13d
    }

    if (window.navigator.msPointerEnabled) {
      touchStartClientX = event.pageX;
      touchStartClientY = event.pageY;
    } else {
      touchStartClientX = event.touches[0].clientX;
      touchStartClientY = event.touches[0].clientY;
    }

    event.preventDefault();
  });

  gameContainer.addEventListener(this.eventTouchmove, function (event) {
    event.preventDefault();
  });

  gameContainer.addEventListener(this.eventTouchend, function (event) {
    if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
<<<<<<< HEAD
        event.targetTouches > 0) {
      return; // Ignore if still touching with one or more fingers
=======
<<<<<<< HEAD
        event.targetTouches > 0) {
      return; // Ignore if still touching with one or more fingers
=======
        event.targetTouches > 0 ||
        self.targetIsInput(event)) {
      return; // Ignore if still touching with one or more fingers or input
>>>>>>> 0fc435451731c83d13cef40ebb46562b50a8efc0
>>>>>>> 11e226b056c274ba3f9025b16fa8067b1eb2f13d
    }

    var touchEndClientX, touchEndClientY;

    if (window.navigator.msPointerEnabled) {
      touchEndClientX = event.pageX;
      touchEndClientY = event.pageY;
    } else {
      touchEndClientX = event.changedTouches[0].clientX;
      touchEndClientY = event.changedTouches[0].clientY;
    }

    var dx = touchEndClientX - touchStartClientX;
    var absDx = Math.abs(dx);

    var dy = touchEndClientY - touchStartClientY;
    var absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 10) {
      // (right : left) : (down : up)
      self.emit("move", absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
    }
  });
};

KeyboardInputManager.prototype.restart = function (event) {
  event.preventDefault();
  this.emit("restart");
};

KeyboardInputManager.prototype.keepPlaying = function (event) {
  event.preventDefault();
  this.emit("keepPlaying");
};

KeyboardInputManager.prototype.bindButtonPress = function (selector, fn) {
  var button = document.querySelector(selector);
  button.addEventListener("click", fn.bind(this));
  button.addEventListener(this.eventTouchend, fn.bind(this));
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

KeyboardInputManager.prototype.targetIsInput = function (event) {
  return event.target.tagName.toLowerCase() === "input";
};
>>>>>>> 0fc435451731c83d13cef40ebb46562b50a8efc0
>>>>>>> 11e226b056c274ba3f9025b16fa8067b1eb2f13d
