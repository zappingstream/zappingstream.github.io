/**
 * App version: 1.0.0
 * SDK version: 5.5.7
 * CLI version: 2.14.2
 * 
 * Generated: Fri, 27 Nov 2026 13:09:54 GMT
 */

var APP_com_domain_app_ZappingStream = (function () {
  'use strict';

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const settings = {};
  const subscribers = {};
  const initSettings = (appSettings, platformSettings) => {
    settings['app'] = appSettings;
    settings['platform'] = platformSettings;
    settings['user'] = {};
  };
  const publish = (key, value) => {
    subscribers[key] && subscribers[key].forEach(subscriber => subscriber(value));
  };
  const dotGrab = function () {
    let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }
    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };
  var Settings$1 = {
    get(type, key) {
      let fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      const val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback;
    },
    has(type, key) {
      return !!this.get(type, key);
    },
    set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe(key, callback) {
      if (callback) {
        const index = subscribers[key] && subscribers[key].findIndex(cb => cb === callback);
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers)) {
        delete subscribers[key];
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const prepLog = (type, args) => {
    const colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };
  var Log$1 = {
    info() {
      Settings$1.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug() {
      Settings$1.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error() {
      Settings$1.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn() {
      Settings$1.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var Lightning$1 = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ColorShift extends Lightning$1.shaders.WebGLDefaultShader {
    set brightness(v) {
      this._brightness = (v - 50) / 100;
      this.redraw();
    }
    set contrast(v) {
      this._contrast = (v + 50) / 100;
      this.redraw();
    }
    set gamma(v) {
      this._gamma = (v + 50) / 100;
      this.redraw();
    }
    setupUniforms(operation) {
      super.setupUniforms(operation);
      const gl = this.gl;
      this._setUniform('colorAdjust', [this._brightness || 0.0, this._contrast || 1.0, this._gamma || 1.0], gl.uniform3fv);
    }
  }
  ColorShift.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec3 colorAdjust;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
  ColorShift.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }   \n    \n    vec3 updateGamma(vec3 value, float param)\n    {\n        return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n    } \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = filter(fragColor) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,colorAdjust[0],colorAdjust[1]);        \n        vec3 ga = updateGamma(bc.rgb, colorAdjust[2]);  \n              \n        gl_FragColor = vec4(ga.rgb, color.a);          \n    }    \n";

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ProtanopiaShader extends ColorShift {}
  ProtanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));      \n    }    \n    ").concat(ColorShift.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class DeuteranopiaShader extends ColorShift {}
  DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n       \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));    \n    }\n    ").concat(ColorShift.after, "    \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class TritanopiaShader extends ColorShift {}
  TritanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }   \n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));\n    }   \n    ").concat(ColorShift.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class NeutralShader extends ColorShift {}
  NeutralShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {\n        return color;\n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class MonochromacyShader extends ColorShift {}
  MonochromacyShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const colorshiftShader = type => {
    const shadersMap = {
      normal: NeutralShader,
      monochromacy: MonochromacyShader,
      deuteranopia: DeuteranopiaShader,
      tritanopia: TritanopiaShader,
      protanopia: ProtanopiaShader
    };
    type = typeof type === 'string' && type.toLowerCase() || null;
    return Object.keys(shadersMap).indexOf(type) > -1 ? shadersMap[type] : false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* global SpeechSynthesisErrorEvent */
  function flattenStrings() {
    let series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const flattenedSeries = [];
    for (var i = 0; i < series.length; i++) {
      if (typeof series[i] === 'string' && !series[i].includes('PAUSE-')) {
        flattenedSeries.push(series[i]);
      } else {
        break;
      }
    }
    // add a "word boundary" to ensure the Announcer doesn't automatically try to
    // interpret strings that look like dates but are not actually dates
    // for example, if "Rising Sun" and "1993" are meant to be two separate lines,
    // when read together, "Sun 1993" is interpretted as "Sunday 1993"
    return [flattenedSeries.join(',\b ')].concat(series.slice(i));
  }
  function delay(pause) {
    return new Promise(resolve => {
      setTimeout(resolve, pause);
    });
  }

  /**
   * Speak a string
   *
   * @param {string} phrase Phrase to speak
   * @param {SpeechSynthesisUtterance[]} utterances An array which the new SpeechSynthesisUtterance instance representing this utterance will be appended
   * @return {Promise<void>} Promise resolved when the utterance has finished speaking, and rejected if there's an error
   */
  function speak(phrase, utterances) {
    let lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
    const synth = window.speechSynthesis;
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = lang;
      utterance.onend = () => {
        resolve();
      };
      utterance.onerror = e => {
        reject(e);
      };
      utterances.push(utterance);
      synth.speak(utterance);
    });
  }
  function speakSeries(series, lang) {
    let root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const synth = window.speechSynthesis;
    const remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
    const nestedSeriesResults = [];
    /*
      We hold this array of SpeechSynthesisUtterances in order to prevent them from being
      garbage collected prematurely on STB hardware which can cause the 'onend' events of
      utterances to not fire consistently.
    */
    const utterances = [];
    let active = true;
    const seriesChain = (async () => {
      try {
        while (active && remainingPhrases.length) {
          const phrase = await Promise.resolve(remainingPhrases.shift());
          if (!active) {
            // Exit
            // Need to check this after the await in case it was cancelled in between
            break;
          } else if (typeof phrase === 'string' && phrase.includes('PAUSE-')) {
            // Pause it
            let pause = phrase.split('PAUSE-')[1] * 1000;
            if (isNaN(pause)) {
              pause = 0;
            }
            await delay(pause);
          } else if (typeof phrase === 'string' && phrase.length) {
            // Speak it
            const totalRetries = 3;
            let retriesLeft = totalRetries;
            while (active && retriesLeft > 0) {
              try {
                await speak(phrase, utterances, lang);
                retriesLeft = 0;
              } catch (e) {
                // eslint-disable-next-line no-undef
                if (e instanceof SpeechSynthesisErrorEvent) {
                  if (e.error === 'network') {
                    retriesLeft--;
                    console.warn("Speech synthesis network error. Retries left: ".concat(retriesLeft));
                    await delay(500 * (totalRetries - retriesLeft));
                  } else if (e.error === 'canceled' || e.error === 'interrupted') {
                    // Cancel or interrupt error (ignore)
                    retriesLeft = 0;
                  } else {
                    throw new Error("SpeechSynthesisErrorEvent: ".concat(e.error));
                  }
                } else {
                  throw e;
                }
              }
            }
          } else if (typeof phrase === 'function') {
            const seriesResult = speakSeries(phrase(), lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          } else if (Array.isArray(phrase)) {
            // Speak it (recursively)
            const seriesResult = speakSeries(phrase, lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          }
        }
      } finally {
        active = false;
      }
    })();
    return {
      series: seriesChain,
      get active() {
        return active;
      },
      append: toSpeak => {
        remainingPhrases.push(toSpeak);
      },
      cancel: () => {
        if (!active) {
          return;
        }
        if (root) {
          synth.cancel();
        }
        nestedSeriesResults.forEach(nestedSeriesResults => {
          nestedSeriesResults.cancel();
        });
        active = false;
      }
    };
  }
  let currentSeries;
  function SpeechEngine (toSpeak, lang) {
    currentSeries && currentSeries.cancel();
    currentSeries = speakSeries(toSpeak, lang);
    return currentSeries;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * Code from: https://github.com/jashkenas/underscore is
   * Copyright (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
   * Licensed under the MIT License based off:
   * http://unscriptable.com/2009/03/20/debouncing-javascript-methods/ which is:
   * Copyright (c) 2007-2009 unscriptable.com and John M. Hann
   * Licensed under the MIT License (with X11 advertising exception)
   */

  function getElmName(elm) {
    return elm.ref || elm.constructor.name;
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear'
   * that is a function which will clear the timer to prevent previously scheduled executions.
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */
  function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;
    function later() {
      var last = Date.now() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function () {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
      return result;
    };
    debounced.clear = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    debounced.flush = function () {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        clearTimeout(timeout);
        timeout = null;
      }
    };
    return debounced;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let resetFocusPathTimer;
  let prevFocusPath = [];
  let currentlySpeaking;
  let voiceOutDisabled = false;
  const fiveMinutes = 300000;
  function onFocusChangeCore() {
    let focusPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!Announcer.enabled) {
      return;
    }
    const loaded = focusPath.every(elm => !elm.loading);
    const focusDiff = focusPath.filter(elm => !prevFocusPath.includes(elm));
    resetFocusPathTimer();
    if (!loaded) {
      Announcer.onFocusChange();
      return;
    }
    prevFocusPath = focusPath.slice(0);
    let toAnnounceText = [];
    let toAnnounce = focusDiff.reduce((acc, elm) => {
      if (elm.announce) {
        acc.push([getElmName(elm), 'Announce', elm.announce]);
        toAnnounceText.push(elm.announce);
      } else if (elm.title) {
        acc.push([getElmName(elm), 'Title', elm.title]);
        toAnnounceText.push(elm.title);
      }
      return acc;
    }, []);
    focusDiff.reverse().reduce((acc, elm) => {
      if (elm.announceContext) {
        acc.push([getElmName(elm), 'Context', elm.announceContext]);
        toAnnounceText.push(elm.announceContext);
      } else {
        acc.push([getElmName(elm), 'No Context', '']);
      }
      return acc;
    }, toAnnounce);
    if (Announcer.debug) {
      console.table(toAnnounce);
    }
    if (toAnnounceText.length) {
      return Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), []));
    }
  }
  function textToSpeech(toSpeak) {
    if (voiceOutDisabled) {
      return;
    }
    return currentlySpeaking = SpeechEngine(toSpeak);
  }
  const Announcer = {
    enabled: true,
    debug: false,
    cancel: function () {
      currentlySpeaking && currentlySpeaking.cancel();
    },
    clearPrevFocus: function () {
      let depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      prevFocusPath = prevFocusPath.slice(0, depth);
      resetFocusPathTimer();
    },
    speak: function (text) {
      let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$append = _ref.append,
        append = _ref$append === void 0 ? false : _ref$append,
        _ref$notification = _ref.notification,
        notification = _ref$notification === void 0 ? false : _ref$notification;
      if (Announcer.enabled) {
        Announcer.onFocusChange.flush();
        if (append && currentlySpeaking && currentlySpeaking.active) {
          currentlySpeaking.append(text);
        } else {
          Announcer.cancel();
          textToSpeech(text);
        }
        if (notification) {
          voiceOutDisabled = true;
          currentlySpeaking.series.finally(() => {
            voiceOutDisabled = false;
            Announcer.refresh();
          });
        }
      }
      return currentlySpeaking;
    },
    setupTimers: function () {
      let _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$focusDebounce = _ref2.focusDebounce,
        focusDebounce = _ref2$focusDebounce === void 0 ? 400 : _ref2$focusDebounce,
        _ref2$focusChangeTime = _ref2.focusChangeTimeout,
        focusChangeTimeout = _ref2$focusChangeTime === void 0 ? fiveMinutes : _ref2$focusChangeTime;
      Announcer.onFocusChange = debounce(onFocusChangeCore, focusDebounce);
      resetFocusPathTimer = debounce(() => {
        // Reset focus path for full announce
        prevFocusPath = [];
      }, focusChangeTimeout);
    }
  };
  Announcer.setupTimers();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Accessibility = {
    Announcer,
    colorshift(component) {
      let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        brightness: 50,
        contrast: 50,
        gamma: 50
      };
      config = {
        ...{
          brightness: 50,
          contrast: 50,
          gamma: 50
        },
        ...config
      };
      const shader = type && colorshiftShader(type);
      if (shader) {
        Log$1.info('Accessibility Colorshift', type, config);
        component.rtt = true;
        component.shader = {
          type: shader,
          ...config
        };
      } else {
        Log$1.info('Accessibility Colorshift', 'Disabled');
        component.rtt = false;
        component.shader = null;
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let Log;
  let Settings;
  let ApplicationInstance$1;
  let Ads$1;
  let Lightning;
  const initLightningSdkPlugin = {
    set log(v) {
      Log = v;
    },
    set settings(v) {
      Settings = v;
    },
    set ads(v) {
      Ads$1 = v;
    },
    set lightning(v) {
      Lightning = v;
    },
    set appInstance(v) {
      ApplicationInstance$1 = v;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initMetrics = config => {
    sendMetric = config.sendMetric;
  };
  let sendMetric = (type, event, params) => {
    Log.info('Sending metric', type, event, params);
  };

  // available metric per category
  const metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play',
    // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  };

  // error metric function (added to each category)
  const errorMetric = function (type, message, code, visible) {
    let params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = {
      params,
      ...{
        message,
        code,
        visible
      }
    };
    sendMetric(type, 'error', params);
  };
  const Metric = function (type, events) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce((obj, event) => {
      obj[event] = function (name) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = {
          ...options,
          ...(name ? {
            name
          } : {}),
          ...params
        };
        sendMetric(type, event, params);
      };
      return obj;
    }, {
      error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };
  const Metrics = types => {
    return Object.keys(types).reduce((obj, type) => {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = url => Metric(type, types[type], {
        url
      }) : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };
  var Metrics$1 = Metrics(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const formatLocale = locale => {
    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  };
  const getLocale = defaultValue => {
    if ('language' in navigator) {
      const locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getLanguage = defaultValue => {
    if ('language' in navigator) {
      const language = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getCountryCode = defaultValue => {
    if ('language' in navigator) {
      const countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const hasOrAskForGeoLocationPermission = () => {
    return new Promise(resolve => {
      // force to prompt for location permission
      if (Settings.get('platform', 'forceBrowserGeolocation') === true) resolve(true);
      if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
        navigator.permissions.query({
          name: 'geolocation'
        }).then(status => {
          resolve(status.state === 'granted' || status.status === 'granted');
        });
      } else {
        resolve(false);
      }
    });
  };
  const getLatLon = defaultValue => {
    return new Promise(resolve => {
      hasOrAskForGeoLocationPermission().then(granted => {
        if (granted === true) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
            // success
            result => result && result.coords && resolve([result.coords.latitude, result.coords.longitude]),
            // error
            () => resolve(defaultValue),
            // options
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            });
          } else {
            return queryForLatLon().then(result => resolve(result || defaultValue));
          }
        } else {
          return queryForLatLon().then(result => resolve(result || defaultValue));
        }
      });
    });
  };
  const queryForLatLon = () => {
    return new Promise(resolve => {
      fetch('https://geolocation-db.com/json/').then(response => response.json()).then(_ref => {
        let latitude = _ref.latitude,
          longitude = _ref.longitude;
        return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
      }).catch(() => resolve(false));
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultProfile = {
    ageRating: 'adult',
    city: 'New York',
    zipCode: '27505',
    countryCode: () => getCountryCode('US'),
    ip: '127.0.0.1',
    household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
    language: () => getLanguage('en'),
    latlon: () => getLatLon([40.7128, 74.006]),
    locale: () => getLocale('en-US'),
    mac: '00:00:00:00:00:00',
    operator: 'metrological',
    platform: 'metrological',
    packages: [],
    uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
    stbType: 'metrological'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let getInfo = key => {
    const profile = {
      ...defaultProfile,
      ...Settings.get('platform', 'profile')
    };
    return Promise.resolve(typeof profile[key] === 'function' ? profile[key]() : profile[key]);
  };
  let setInfo = (key, params) => {
    if (key in defaultProfile) return defaultProfile[key] = params;
  };
  const initProfile = config => {
    getInfo = config.getInfo ? config.getInfo : getInfo;
    setInfo = config.setInfo ? config.setInfo : setInfo;
  };

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  const initPurchase = config => {
    if (config.billingUrl) config.billingUrl;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  const channels = () => Settings.get('platform', 'tv', defaultChannels);
  const randomChannel = () => channels()[~~(channels.length * Math.random())];

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let currentChannel;
  const callbacks = {};
  const emit$1 = function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    callbacks[event] && callbacks[event].forEach(cb => {
      cb.apply(null, args);
    });
  };

  // local mock methods
  let methods = {
    getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        if (currentChannel) {
          const channel = {
            ...currentChannel
          };
          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel(number) {
      return new Promise((resolve, reject) => {
        if (number) {
          const newChannel = channels().find(c => c.number === number);
          if (newChannel) {
            currentChannel = newChannel;
            const channel = {
              ...currentChannel
            };
            delete channel.program;
            emit$1('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  const initTV = config => {
    methods = {};
    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }
    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }
    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }
    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit$1);
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPin = config => {
    if (config.submit && typeof config.submit === 'function') {
      config.submit;
    }
    if (config.check && typeof config.check === 'function') {
      config.check;
    }
  };

  var executeAsPromise = (function (method) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let result;
    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise
    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    }
    // otherwise make it into a promise
    else {
      return new Promise((resolve, reject) => {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var events$1 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var autoSetupMixin = (function (sourceObject) {
    let setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    let ready = false;
    const doSetup = () => {
      if (ready === false) {
        setup();
        ready = true;
      }
    };
    return Object.keys(sourceObject).reduce((obj, key) => {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }
      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let timeout = null;
  var easeExecution = (cb, delay) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, delay);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var VideoTexture = () => {
    return class VideoTexture extends Lightning.Component {
      static _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: Lightning.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
      set videoEl(v) {
        this._videoEl = v;
      }
      get videoEl() {
        return this._videoEl;
      }
      get videoView() {
        return this.tag('Video');
      }
      get videoTexture() {
        return this.videoView.texture;
      }
      get isVisible() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
      _init() {
        this._createVideoTexture();
      }
      _createVideoTexture() {
        const stage = this.stage;
        const gl = stage.gl;
        const glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
      start() {
        const stage = this.stage;
        this._lastTime = 0;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();
              const getVideoPlaybackQuality = this.videoEl.getVideoPlaybackQuality();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'
              const frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoView.visible = true;
                  this.videoTexture.options.w = this.videoEl.width;
                  this.videoTexture.options.h = this.videoEl.height;
                  const expectedAspectRatio = this.videoView.w / this.videoView.h;
                  const realAspectRatio = this.videoEl.width / this.videoEl.height;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoView.scaleY = 1;
                  } else {
                    this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error('texImage2d video', e);
                  this.stop();
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
      stop() {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
      position(top, left) {
        this.videoView.patch({
          x: left,
          y: top
        });
      }
      size(width, height) {
        this.videoView.patch({
          w: width,
          h: height
        });
      }
      show() {
        this.videoView.alpha = 1;
      }
      hide() {
        this.videoView.alpha = 0;
      }
    };
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let mediaUrl$1 = url => url;
  let videoEl;
  let videoTexture;
  let metrics;
  let consumer$1;
  let precision = 1;
  let textureMode = false;
  const initVideoPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };
  // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close
  let eventHandlers = {};
  const state$1 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,
    get playingAds() {
      return this._playingAds;
    },
    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },
    skipTime: false,
    playAfterSeek: null
  };
  const hooks = {
    play() {
      state$1.playing = true;
    },
    pause() {
      state$1.playing = false;
    },
    seeked() {
      state$1.playAfterSeek === true && videoPlayerPlugin.play();
      state$1.playAfterSeek = null;
    },
    abort() {
      deregisterEventListeners();
    }
  };
  const withPrecision = val => Math.round(precision * val) + 'px';
  const fireOnConsumer$1 = (event, args) => {
    if (consumer$1) {
      consumer$1.fire('$videoPlayer' + event, args, videoEl.currentTime);
      consumer$1.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };
  const fireHook = (event, args) => {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };
  let customLoader = null;
  let customUnloader = null;
  const loader$1 = (url, videoEl, config) => {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(resolve => {
      url = mediaUrl$1(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };
  const unloader = videoEl => {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(resolve => {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };
  const setupVideoTag = () => {
    const videoEls = document.getElementsByTagName('video');
    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      const videoEl = document.createElement('video');
      const platformSettingsWidth = Settings.get('platform', 'width') ? Settings.get('platform', 'width') : 1920;
      const platformSettingsHeight = Settings.get('platform', 'height') ? Settings.get('platform', 'height') : 1080;
      videoEl.setAttribute('id', 'video-player');
      videoEl.setAttribute('width', withPrecision(platformSettingsWidth));
      videoEl.setAttribute('height', withPrecision(platformSettingsHeight));
      videoEl.style.position = 'absolute';
      videoEl.style.zIndex = '1';
      videoEl.style.display = 'none';
      videoEl.style.visibility = 'hidden';
      videoEl.style.top = withPrecision(0);
      videoEl.style.left = withPrecision(0);
      videoEl.style.width = withPrecision(platformSettingsWidth);
      videoEl.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(videoEl);
      return videoEl;
    }
  };
  const setUpVideoTexture = () => {
    if (!ApplicationInstance$1.tag('VideoTexture')) {
      const el = ApplicationInstance$1.stage.c({
        type: VideoTexture(),
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl
      });
      ApplicationInstance$1.childList.addAt(el, 0);
    }
    return ApplicationInstance$1.tag('VideoTexture');
  };
  const registerEventListeners = () => {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$1).forEach(event => {
      const handler = e => {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        }
        // fire an internal hook
        fireHook(event, {
          videoElement: videoEl,
          event: e
        });

        // fire the event (with human friendly event name) to the consumer of the VideoPlayer
        fireOnConsumer$1(events$1[event], {
          videoElement: videoEl,
          event: e
        });
      };
      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };
  const deregisterEventListeners = () => {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(event => {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };
  const videoPlayerPlugin = {
    consumer(component) {
      consumer$1 = component;
    },
    loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);
      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size() {
      let width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);
      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      let bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      let left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open(url) {
      let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$1.media(url);
      this.hide();
      deregisterEventListeners();
      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        const adConfig = {
          enabled: state$1.adsEnabled,
          duration: 300
        };
        if (config.videoId) {
          adConfig.caid = config.videoId;
        }
        Ads$1.get(adConfig, consumer$1).then(ads => {
          state$1.playingAds = true;
          ads.prerolls().then(() => {
            state$1.playingAds = false;
            loader$1(url, videoEl, config).then(() => {
              registerEventListeners();
              this.show();
              this.play();
            }).catch(e => {
              fireOnConsumer$1('Error', {
                videoElement: videoEl,
                event: e
              });

              // This is not API-compliant, as it results in firing "$videoPlayererror" rather than "$videoPlayerError".
              // See docs here for API-compliant events -> https://github.com/Metrological/metrological-sdk/blob/master/docs/plugins/videoplayer.md#event-overview
              // It has been kept for backwards compatability for library consumers who may have already written handler functions to match it.
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload() {
      if (!this.canInteract) return;
      const url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close() {
      Ads$1.cancel();
      if (state$1.playingAds) {
        state$1.playingAds = false;
        Ads$1.stop();
        // call self in next tick
        setTimeout(() => {
          this.close();
        });
      }
      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear() {
      if (!this.canInteract) return;
      // pause the video first to disable sound
      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(() => {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(e => {
        fireOnConsumer$1('Error', {
          videoElement: videoEl,
          event: e
        });

        // This is not API-compliant, as it results in firing "$videoPlayererror" rather than "$videoPlayerError".
        // See docs here for API-compliant events -> https://github.com/Metrological/metrological-sdk/blob/master/docs/plugins/videoplayer.md#event-overview
        // It has been kept for backwards compatability for library consumers who may have already written handler functions to match it.
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute() {
      let muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop() {
      let looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return;
      // define whether should continue to play after seek is complete (in seeked hook)
      if (state$1.playAfterSeek === null) {
        state$1.playAfterSeek = !!state$1.playing;
      }
      // pause before actually seeking
      this.pause();
      // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)
      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip(seconds) {
      if (!this.canInteract) return;
      if (!this.src) return;
      state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
      easeExecution(() => {
        this.seek(state$1.skipTime);
        state$1.skipTime = false;
      }, 300);
    },
    show() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds() {
      let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$1.adsEnabled = enabled;
    },
    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },
    get currentTime() {
      return videoEl && videoEl.currentTime;
    },
    get muted() {
      return videoEl && videoEl.muted;
    },
    get looped() {
      return videoEl && videoEl.loop;
    },
    get src() {
      return videoEl && videoEl.getAttribute('src');
    },
    get playing() {
      return state$1.playing;
    },
    get playingAds() {
      return state$1.playingAds;
    },
    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$1.playingAds === false;
    },
    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },
    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },
    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },
    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },
    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },
    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },
    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },
    get adsEnabled() {
      return state$1.adsEnabled;
    },
    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },
    get _consumer() {
      return consumer$1;
    }
  };
  autoSetupMixin(videoPlayerPlugin, () => {
    precision = ApplicationInstance$1 && ApplicationInstance$1.stage && ApplicationInstance$1.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings.get('platform', 'textureMode', false);
    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let consumer;
  let getAds = () => {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };
  const initAds = config => {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  const state = {
    active: false
  };
  const playSlot = function () {
    let slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce((promise, ad) => {
      return promise.then(() => {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };
  const playAd = ad => {
    return new Promise(resolve => {
      if (state.active === false) {
        Log$1.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      }
      // is it safe to rely on videoplayer plugin already created the video tag?
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl$1(ad.url);
      videoEl.load();
      let timeEvents = null;
      let timeout;
      const cleanup = () => {
        // remove all listeners
        Object.keys(handlers).forEach(handler => videoEl.removeEventListener(handler, handlers[handler]));
        resolve();
      };
      const handlers = {
        play() {
          Log$1.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log$1.info('Ad', 'Calculated quartiles times', {
              timeEvents
            });
          }
          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }
          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }
          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(() => {
            cleanup();
          }, 5000); // make timeout configurable
        },
        canplay() {
          timeout && clearTimeout(timeout);
        },
        error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort() {
          cleanup();
        }
        // todo: pause, resume, mute, unmute beacons
      };
      // add all listeners
      Object.keys(handlers).forEach(handler => videoEl.addEventListener(handler, handlers[handler]));
      videoEl.play();
    });
  };
  const sendBeacon = (callbacks, event) => {
    if (callbacks && callbacks[event]) {
      Log$1.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce((promise, url) => {
        return promise.then(() => fetch(url)
        // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
        // note: for fetch failed http responses don't throw an Error :)
        .then(response => {
          if (response.status === 200) {
            fireOnConsumer('Beacon' + event + 'Sent');
          } else {
            fireOnConsumer('Beacon' + event + 'Failed' + response.status);
          }
          Promise.resolve(null);
        }).catch(() => {
          Promise.resolve(null);
        }));
      }, Promise.resolve(null));
    } else {
      Log$1.info('Ad', 'No callback found for ' + event);
    }
  };
  const fireOnConsumer = (event, args) => {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };
  var Ads = {
    get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls() {
            return Promise.resolve();
          }
        });
      }
      consumer = videoPlayerConsumer;
      return new Promise(resolve => {
        Log$1.info('Ad', 'Starting session');
        getAds(config).then(ads => {
          Log$1.info('Ad', 'API result', ads);
          resolve({
            prerolls() {
              if (ads.preroll) {
                state.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(() => {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state.active = false;
                });
              }
              return Promise.resolve();
            },
            midrolls() {
              return Promise.resolve();
            },
            postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel() {
      Log$1.info('Ad', 'Cancel Ad');
      state.active = false;
    },
    stop() {
      Log$1.info('Ad', 'Stop Ad');
      state.active = false;
      // fixme: duplication
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }
  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }
  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }
  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
  }
  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }
  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  }

  // Protects from prototype poisoning and unexpected merging up the prototype chain.
  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }
  function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }
    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }
      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }
  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }
  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }
    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  function isObject$2(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  function isPlainObject(o) {
    var ctor,prot;

    if (isObject$2(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObject$2(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let warned = false;
  const deprecated = function () {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }
    warned = true;
  };
  class Locale {
    constructor() {
      this.__enabled = false;
    }

    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */
    async load(path) {
      if (!this.__enabled) {
        return;
      }
      await fetch(path).then(resp => resp.json()).then(resp => {
        this.loadFromObject(resp);
      });
    }

    /**
     * Sets language used by module.
     *
     * @param {String} lang
     */
    setLanguage(lang) {
      deprecated();
      this.__enabled = true;
      this.language = lang;
    }

    /**
     * Returns reference to translation object for current language.
     *
     * @return {Object}
     */
    get tr() {
      deprecated(true);
      return this.__trObj[this.language];
    }

    /**
     * Loads translation object from existing object (binds existing object).
     *
     * @param {Object} trObj
     */
    loadFromObject(trObj) {
      deprecated();
      const fallbackLanguage = 'en';
      if (Object.keys(trObj).indexOf(this.language) === -1) {
        Log$1.warn('No translations found for: ' + this.language);
        if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
          Log$1.warn('Using fallback language: ' + fallbackLanguage);
          this.language = fallbackLanguage;
        } else {
          const error = 'No translations found for fallback language: ' + fallbackLanguage;
          Log$1.error(error);
          throw Error(error);
        }
      }
      this.__trObj = trObj;
      for (const lang of Object.values(this.__trObj)) {
        for (const str of Object.keys(lang)) {
          lang[str] = new LocalizedString(lang[str]);
        }
      }
    }
  }

  /**
   * Extended string class used for localization.
   */
  class LocalizedString extends String {
    /**
     * Returns formatted LocalizedString.
     * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
     *
     * E.g.:
     * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
     * A and B and A
     *
     * @param  {...any} args List of arguments for placeholders.
     */
    format() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const sub = args.reduce((string, arg, index) => string.split("{".concat(index, "}")).join(arg), this);
      return new LocalizedString(sub);
    }
  }
  var Locale$1 = new Locale();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class VersionLabel extends Lightning$1.Component {
    static _template() {
      return {
        rect: true,
        color: 0xbb0078ac,
        h: 40,
        w: 100,
        x: w => w - 50,
        y: h => h - 50,
        mount: 1,
        Text: {
          w: w => w,
          h: h => h,
          y: 5,
          x: 20,
          text: {
            fontSize: 22,
            lineHeight: 26
          }
        }
      };
    }
    _firstActive() {
      this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
      this.tag('Text').loadTexture();
      this.w = this.tag('Text').renderWidth + 40;
      this.h = this.tag('Text').renderHeight + 5;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class FpsIndicator extends Lightning$1.Component {
    static _template() {
      return {
        rect: true,
        color: 0xffffffff,
        texture: Lightning$1.Tools.getRoundRect(80, 80, 40),
        h: 80,
        w: 80,
        x: 100,
        y: 100,
        mount: 1,
        Background: {
          x: 3,
          y: 3,
          texture: Lightning$1.Tools.getRoundRect(72, 72, 36),
          color: 0xff008000
        },
        Counter: {
          w: w => w,
          h: h => h,
          y: 10,
          text: {
            fontSize: 32,
            textAlign: 'center'
          }
        },
        Text: {
          w: w => w,
          h: h => h,
          y: 48,
          text: {
            fontSize: 15,
            textAlign: 'center',
            text: 'FPS'
          }
        }
      };
    }
    _setup() {
      this.config = {
        ...{
          log: false,
          interval: 500,
          threshold: 1
        },
        ...Settings$1.get('platform', 'showFps')
      };
      this.fps = 0;
      this.lastFps = this.fps - this.config.threshold;
      const fpsCalculator = () => {
        this.fps = ~~(1 / this.stage.dt);
      };
      this.stage.on('frameStart', fpsCalculator);
      this.stage.off('framestart', fpsCalculator);
      this.interval = setInterval(this.showFps.bind(this), this.config.interval);
    }
    _firstActive() {
      this.showFps();
    }
    _detach() {
      clearInterval(this.interval);
    }
    showFps() {
      if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
      this.lastFps = this.fps;
      // green
      let bgColor = 0xff008000;
      // orange
      if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500;
      // red
      else if (this.fps <= 20) bgColor = 0xffff0000;
      this.tag('Background').setSmooth('color', bgColor);
      this.tag('Counter').text = "".concat(this.fps);
      this.config.log && Log$1.info('FPS', this.fps);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var fetchJson = file => {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          // file protocol returns 0
          // http(s) protocol returns 200
          if (xhr.status === 0 || xhr.status === 200) resolve(JSON.parse(xhr.responseText));else reject(xhr.statusText);
        }
      };
      xhr.open('GET', file);
      xhr.send(null);
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let basePath;
  let proxyUrl;
  const initUtils = config => {
    basePath = ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));
    if (config.proxyUrl) {
      proxyUrl = ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl(url) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return proxyUrl ? proxyUrl + '?' + makeQueryString(url, options) : url;
    },
    makeQueryString() {
      return makeQueryString(...arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol() {
      return ensureUrlWithProtocol(...arguments);
    }
  };
  const ensureUrlWithProtocol = url => {
    if (/^\/[^/]/i.test(url) && /^(?:file:)/i.test(window.location.protocol)) {
      return window.location.protocol + '//' + url;
    }
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }
    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }
    return url;
  };
  const makeFullStaticPath = function () {
    let pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;

    // if path is URL, we assume it's already the full static path, so we just return it
    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }
    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname);

      // remove possible leading dot from path
      path = path.charAt(0) === '.' ? path.substr(1) : path;
      // ensure path has leading slash
      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  const cleanUpPathName = pathname => {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    const parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };
  const makeQueryString = function (url) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value
    options[type] = url;
    return Object.keys(options).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let meta = {};
  let translations = {};
  let language = null;
  const initLanguage = function (file) {
    let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise((resolve, reject) => {
      fetchJson(file).then(json => {
        setTranslations(json);
        // set language (directly or in a promise)
        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(lang => setLanguage(lang).then(resolve).catch(reject)).catch(e => {
          Log$1.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(() => {
        const error = 'Language file ' + file + ' not found';
        Log$1.error(error);
        reject(error);
      });
    });
  };
  const setTranslations = obj => {
    if ('meta' in obj) {
      meta = {
        ...obj.meta
      };
      delete obj.meta;
    }
    translations = obj;
  };
  const setLanguage = lng => {
    language = null;
    return new Promise((resolve, reject) => {
      if (lng in translations) {
        language = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          const error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
          Log$1.warn(error);
          language = meta.default;
        } else {
          const error = 'Translations for Language ' + language + ' not found.';
          Log$1.error(error);
          reject(error);
        }
      }
      if (language) {
        Log$1.info('Setting language to', language);
        const translationsObj = translations[language];
        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          const url = Utils.asset(translationsObj);
          fetchJson(url).then(json => {
            // save the translations for this language (to prevent loading twice)
            translations[language] = json;
            resolve();
          }).catch(e => {
            const error = 'Error while fetching ' + url;
            Log$1.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout(cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }
      const timeoutId = setTimeout(() => {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        cb.apply(null, params);
      }, timeout, params);
      Log$1.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    },
    clearTimeout(timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        Log$1.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log$1.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    },
    clearTimeouts() {
      registry.timeouts.forEach(timeoutId => {
        this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval(cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }
      const intervalId = setInterval(() => {
        registry.intervals.filter(id => id !== intervalId);
        cb.apply(null, params);
      }, interval, params);
      Log$1.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    },
    clearInterval(intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(id => id !== intervalId);
        Log$1.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log$1.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    },
    clearIntervals() {
      registry.intervals.forEach(intervalId => {
        this.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      const targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log$1.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener(target, event, handler) {
      const targetIndex = registry.targets.indexOf(target);
      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(fn => fn !== handler);
        Log$1.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
        // remove key from event listeners object when no events are registered for that event
        Object.keys(registry.eventListeners[targetIndex]).forEach(event => {
          if (registry.eventListeners[targetIndex][event].length === 0) {
            delete registry.eventListeners[targetIndex][event];
          }
        });
        // remove reference to the target when target has no event listeners registered
        if (Object.keys(registry.eventListeners[targetIndex]).length === 0) {
          registry.targets.splice(targetIndex, 1);
          registry.eventListeners.splice(targetIndex, 1);
        }
      } else {
        Log$1.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners(target, event) {
      if (target && event) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(handler => {
            this.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          Object.keys(registry.eventListeners[targetIndex]).forEach(_event => {
            this.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(targetIndex => {
          this.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const isObject$1 = v => {
    return typeof v === 'object' && v !== null;
  };
  const isString$1 = v => {
    return typeof v === 'string';
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  const normalizedColors = {
    //store for normalized colors
  };
  const addColors = (colorsToAdd, value) => {
    if (isObject$1(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(color => cleanUpNormalizedColors(color));
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$1(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };
  const cleanUpNormalizedColors = color => {
    for (let c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };
  const initColors = file => {
    return new Promise((resolve, reject) => {
      if (typeof file === 'object') {
        addColors(file);
        return resolve();
      }
      fetchJson(file).then(json => {
        addColors(json);
        return resolve();
      }).catch(() => {
        const error = 'Colors file ' + file + ' not found';
        Log$1.error(error);
        return reject(error);
      });
    });
  };

  var name = "@lightningjs/sdk";
  var version = "5.5.7";
  var license = "Apache-2.0";
  var types = "index.d.ts";
  var scripts = {
  	postinstall: "node ./scripts/postinstall.js",
  	lint: "eslint '**/*.js'",
  	release: "npm publish --access public",
  	typedoc: "typedoc --tsconfig tsconfig.typedoc.json",
  	tsd: "tsd"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "lint-staged"
  	}
  };
  var dependencies = {
  	"@babel/polyfill": "^7.11.5",
  	"@lightningjs/core": "^2.20.1",
  	"@metrological/sdk": "^1.0.2",
  	"@michieljs/execute-as-promise": "^1.0.0",
  	deepmerge: "^4.2.2",
  	"is-plain-object": "^5.0.0",
  	localcookies: "^2.0.0",
  	shelljs: "^0.8.5",
  	"url-polyfill": "^1.1.10",
  	"whatwg-fetch": "^3.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.11.6",
  	"@babel/plugin-transform-parameters": "^7.10.5 ",
  	"@babel/plugin-transform-spread": "^7.11.0",
  	"@babel/preset-env": "^7.11.5",
  	"babel-eslint": "^10.1.0",
  	eslint: "^7.10.0",
  	"eslint-config-prettier": "^6.12.0",
  	"eslint-plugin-prettier": "^3.1.4",
  	husky: "^4.3.0",
  	"lint-staged": "^10.4.0",
  	prettier: "^1.19.1",
  	rollup: "^1.32.1",
  	"rollup-plugin-babel": "^4.4.0",
  	tsd: "^0.22.0",
  	typedoc: "^0.23.9"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:rdkcentral/Lightning-SDK.git"
  };
  var bugs = {
  	url: "https://github.com/rdkcentral/Lightning-SDK/issues"
  };
  var packageInfo = {
  	name: name,
  	version: version,
  	license: license,
  	types: types,
  	scripts: scripts,
  	"lint-staged": {
  	"*.js": [
  		"eslint --fix"
  	],
  	"src/startApp.js": [
  		"rollup -c ./rollup.config.js"
  	]
  },
  	husky: husky,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	repository: repository,
  	bugs: bugs
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let AppInstance;
  const defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      precision: 1,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };
  const customFontFaces = [];
  const fontLoader = (fonts, store) => new Promise((resolve, reject) => {
    fonts.map(_ref => {
      let family = _ref.family,
        url = _ref.url,
        urls = _ref.urls,
        descriptors = _ref.descriptors;
      return () => {
        const src = urls ? urls.map(url => {
          return 'url(' + url + ')';
        }) : 'url(' + url + ')';
        const fontFace = new FontFace(family, src, descriptors || {});
        store.push(fontFace);
        Log$1.info('Loading font', family);
        document.fonts.add(fontFace);
        return fontFace.load();
      };
    }).reduce((promise, method) => {
      return promise.then(() => method());
    }, Promise.resolve(null)).then(resolve).catch(reject);
  });
  function Application (App, appData, platformSettings) {
    const width = platformSettings.width,
      height = platformSettings.height;
    if (width && height) {
      defaultOptions.stage['w'] = width;
      defaultOptions.stage['h'] = height;
      defaultOptions.stage['precision'] = width / 1920;
    }

    // support for 720p browser
    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage['w'] = 1280;
      defaultOptions.stage['h'] = 720;
      defaultOptions.stage['precision'] = 1280 / 1920;
    }
    return class Application extends Lightning$1.Application {
      constructor(options) {
        const config = cjs(defaultOptions, options, {
          isMergeableObject: isPlainObject
        });
        super(config);
        this.config = config;
      }
      static _template() {
        return {
          w: 1920,
          h: 1080
        };
      }
      colorshift() {
        let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Accessibility.colorshift(this, type, config);
      }
      get keymapping() {
        return this.stage.application.config.keys;
      }

      /**
       * This function overrides the default keymap with the latest keymap.
       * @param customKeyMap
       * @param keepDuplicates
       */
      overrideKeyMap(customKeyMap) {
        let keepDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const baseKeyMap = this.stage.application.config.keys;
        Object.keys(customKeyMap).reduce((keymapping, key) => {
          // prevent duplicate values to exist in final keymapping (i.e. 2 keys triggering 'Back')
          if (!keepDuplicates) {
            Object.keys(baseKeyMap).forEach(baseKey => {
              if (baseKey != key && baseKeyMap[baseKey] == customKeyMap[key]) {
                delete keymapping[baseKey];
              }
            });
          }
          keymapping[key] = customKeyMap[key];
          return keymapping;
        }, baseKeyMap);
        return baseKeyMap;
      }
      _setup() {
        Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []),
        // to be deprecated
        Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(() => {
          Metrics$1.app.loaded();
          this.w = this.config.stage.w / this.config.stage.precision;
          this.h = this.config.stage.h / this.config.stage.precision;
          AppInstance = this.stage.c({
            ref: 'App',
            type: App,
            zIndex: 1,
            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
          });
          this.childList.a(AppInstance);
          this._refocus();
          Log$1.info('App version', this.config.version);
          Log$1.info('SDK version', packageInfo.version);
          if (platformSettings.showVersion) {
            this.childList.a({
              ref: 'VersionLabel',
              type: VersionLabel,
              version: this.config.version,
              sdkVersion: packageInfo.version,
              zIndex: 1
            });
          }
          if (platformSettings.showFps) {
            this.childList.a({
              ref: 'FpsCounter',
              type: FpsIndicator,
              zIndex: 1
            });
          }
          super._setup();
        }).catch(console.error);
      }
      _handleBack() {
        this.closeApp();
      }
      _handleExit() {
        this.closeApp();
      }
      closeApp() {
        Log$1.info('Signaling App Close');
        if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
          platformSettings.onClose(...arguments);
        } else {
          this.close();
        }
      }
      close() {
        Log$1.info('Closing App');
        Settings$1.clearSubscribers();
        Registry.clear();
        this.childList.remove(this.tag('App'));
        this.cleanupFonts();
        // force texture garbage collect
        this.stage.gc();
        this.destroy();
      }
      loadFonts(fonts) {
        return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
      }
      cleanupFonts() {
        if ('delete' in document.fonts) {
          customFontFaces.forEach(fontFace => {
            Log$1.info('Removing font', fontFace.family);
            document.fonts.delete(fontFace);
          });
        } else {
          Log$1.info('No support for removing manually-added fonts');
        }
      }
      loadLanguage(config) {
        let file = Utils.asset('translations.json');
        let language = config;
        if (typeof language === 'object') {
          language = config.language || null;
          file = config.file || file;
        }
        return initLanguage(file, language);
      }
      loadColors(config) {
        let file = Utils.asset('colors.json');
        if (config && (typeof config === 'string' || typeof config === 'object')) {
          file = config;
        }
        return initColors(file);
      }
      set focus(v) {
        this._focussed = v;
        this._refocus();
      }
      _getFocused() {
        return this._focussed || this.tag('App');
      }
    };
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ScaledImageTexture extends Lightning$1.textures.ImageTexture {
    constructor(stage) {
      super(stage);
      this._scalingOptions = undefined;
    }
    set options(options) {
      this.resizeMode = this._scalingOptions = options;
    }
    _getLookupId() {
      return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
    }
    getNonDefaults() {
      const obj = super.getNonDefaults();
      if (this._src) {
        obj.src = this._src;
      }
      return obj;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];
  let mediaUrl = url => url;
  const initMediaPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  };
  class Mediaplayer extends Lightning$1.Component {
    _construct() {
      this._skipRenderToTexture = false;
      this._metrics = null;
      this._textureMode = Settings$1.get('platform', 'textureMode') || false;
      Log$1.info('Texture mode: ' + this._textureMode);
      console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
    }
    static _template() {
      return {
        Video: {
          VideoWrap: {
            VideoTexture: {
              visible: false,
              pivot: 0.5,
              texture: {
                type: Lightning$1.textures.StaticTexture,
                options: {}
              }
            }
          }
        }
      };
    }
    set skipRenderToTexture(v) {
      this._skipRenderToTexture = v;
    }
    get textureMode() {
      return this._textureMode;
    }
    get videoView() {
      return this.tag('Video');
    }
    _init() {
      //re-use videotag if already there
      const videoEls = document.getElementsByTagName('video');
      if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
        this.videoEl = document.createElement('video');
        this.videoEl.setAttribute('id', 'video-player');
        this.videoEl.style.position = 'absolute';
        this.videoEl.style.zIndex = '1';
        this.videoEl.style.display = 'none';
        this.videoEl.setAttribute('width', '100%');
        this.videoEl.setAttribute('height', '100%');
        this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
        document.body.appendChild(this.videoEl);
      }
      if (this.textureMode && !this._skipRenderToTexture) {
        this._createVideoTexture();
      }
      this.eventHandlers = [];
    }
    _registerListeners() {
      events.forEach(event => {
        const handler = e => {
          if (this._metrics && this._metrics[event] && typeof this._metrics[event] === 'function') {
            this._metrics[event]({
              currentTime: this.videoEl.currentTime
            });
          }
          this.fire(event, {
            videoElement: this.videoEl,
            event: e
          });
        };
        this.eventHandlers.push(handler);
        this.videoEl.addEventListener(event, handler);
      });
    }
    _deregisterListeners() {
      Log$1.info('Deregistering event listeners MediaPlayer');
      events.forEach((event, index) => {
        this.videoEl.removeEventListener(event, this.eventHandlers[index]);
      });
      this.eventHandlers = [];
    }
    _attach() {
      this._registerListeners();
    }
    _detach() {
      this._deregisterListeners();
      this.close();
    }
    _createVideoTexture() {
      const stage = this.stage;
      const gl = stage.gl;
      const glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.videoTexture.options = {
        source: glTexture,
        w: this.videoEl.width,
        h: this.videoEl.height
      };
    }
    _startUpdatingVideoTexture() {
      if (this.textureMode && !this._skipRenderToTexture) {
        const stage = this.stage;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              const frameCount = this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoTextureView.visible = true;
                  this.videoTexture.options.w = this.videoEl.videoWidth;
                  this.videoTexture.options.h = this.videoEl.videoHeight;
                  const expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
                  const realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoTextureView.scaleY = 1;
                  } else {
                    this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoTextureView.scaleX = 1;
                  }
                } catch (e) {
                  Log$1.error('texImage2d video', e);
                  this._stopUpdatingVideoTexture();
                  this.videoTextureView.visible = false;
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }
    _stopUpdatingVideoTexture() {
      if (this.textureMode) {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoTextureView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }
    updateSettings() {
      let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // The Component that 'consumes' the media player.
      this._consumer = settings.consumer;
      if (this._consumer && this._consumer.getMediaplayerSettings) {
        // Allow consumer to add settings.
        settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
      }
      if (!Lightning$1.Utils.equalValues(this._stream, settings.stream)) {
        if (settings.stream && settings.stream.keySystem) {
          navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(keySystemAccess => {
            return keySystemAccess.createMediaKeys();
          }).then(createdMediaKeys => {
            return this.videoEl.setMediaKeys(createdMediaKeys);
          }).then(() => {
            if (settings.stream && settings.stream.src) this.open(settings.stream.src);
          }).catch(() => {
            console.error('Failed to set up MediaKeys');
          });
        } else if (settings.stream && settings.stream.src) {
          // This is here to be backwards compatible, will be removed
          // in future sdk release
          if (Settings$1.get('app', 'hls')) {
            if (!window.Hls) {
              window.Hls = class Hls {
                static isSupported() {
                  console.warn('hls-light not included');
                  return false;
                }
              };
            }
            if (window.Hls.isSupported()) {
              if (!this._hls) this._hls = new window.Hls({
                liveDurationInfinity: true
              });
              this._hls.loadSource(settings.stream.src);
              this._hls.attachMedia(this.videoEl);
              this.videoEl.style.display = 'block';
            }
          } else {
            this.open(settings.stream.src);
          }
        } else {
          this.close();
        }
        this._stream = settings.stream;
      }
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPos);
    }
    _setHide(hide) {
      if (this.textureMode) {
        this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
      } else {
        this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
      }
    }
    open(url) {
      let settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        hide: false,
        videoPosition: null
      };
      // prep the media url to play depending on platform (mediaPlayerplugin)
      url = mediaUrl(url);
      this._metrics = Metrics$1.media(url);
      Log$1.info('Playing stream', url);
      if (this.application.noVideo) {
        Log$1.info('noVideo option set, so ignoring: ' + url);
        return;
      }
      // close the video when opening same url as current (effectively reloading)
      if (this.videoEl.getAttribute('src') === url) {
        this.close();
      }
      this.videoEl.setAttribute('src', url);

      // force hide, then force show (in next tick!)
      // (fixes comcast playback rollover issue)
      this.videoEl.style.visibility = 'hidden';
      this.videoEl.style.display = 'none';
      setTimeout(() => {
        this.videoEl.style.display = 'block';
        this.videoEl.style.visibility = 'visible';
      });
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
    }
    close() {
      // We need to pause first in order to stop sound.
      this.videoEl.pause();
      this.videoEl.removeAttribute('src');

      // force load to reset everything without errors
      this.videoEl.load();
      this._clearSrc();
      this.videoEl.style.display = 'none';
    }
    playPause() {
      if (this.isPlaying()) {
        this.doPause();
      } else {
        this.doPlay();
      }
    }
    get muted() {
      return this.videoEl.muted;
    }
    set muted(v) {
      this.videoEl.muted = v;
    }
    get loop() {
      return this.videoEl.loop;
    }
    set loop(v) {
      this.videoEl.loop = v;
    }
    isPlaying() {
      return this._getState() === 'Playing';
    }
    doPlay() {
      this.videoEl.play();
    }
    doPause() {
      this.videoEl.pause();
    }
    reload() {
      var url = this.videoEl.getAttribute('src');
      this.close();
      this.videoEl.src = url;
    }
    getPosition() {
      return Promise.resolve(this.videoEl.currentTime);
    }
    setPosition(pos) {
      this.videoEl.currentTime = pos;
    }
    getDuration() {
      return Promise.resolve(this.videoEl.duration);
    }
    seek(time) {
      let absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (absolute) {
        this.videoEl.currentTime = time;
      } else {
        this.videoEl.currentTime += time;
      }
    }
    get videoTextureView() {
      return this.tag('Video').tag('VideoTexture');
    }
    get videoTexture() {
      return this.videoTextureView.texture;
    }
    _setVideoArea(videoPos) {
      if (Lightning$1.Utils.equalValues(this._videoPos, videoPos)) {
        return;
      }
      this._videoPos = videoPos;
      if (this.textureMode) {
        this.videoTextureView.patch({
          smooth: {
            x: videoPos[0],
            y: videoPos[1],
            w: videoPos[2] - videoPos[0],
            h: videoPos[3] - videoPos[1]
          }
        });
      } else {
        const precision = this.stage.getRenderPrecision();
        this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
        this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
        this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
        this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
      }
    }
    _fireConsumer(event, args) {
      if (this._consumer) {
        this._consumer.fire(event, args);
      }
    }
    _equalInitData(buf1, buf2) {
      if (!buf1 || !buf2) return false;
      if (buf1.byteLength != buf2.byteLength) return false;
      const dv1 = new Int8Array(buf1);
      const dv2 = new Int8Array(buf2);
      for (let i = 0; i != buf1.byteLength; i++) if (dv1[i] != dv2[i]) return false;
      return true;
    }
    error(args) {
      this._fireConsumer('$mediaplayerError', args);
      this._setState('');
      return '';
    }
    loadeddata(args) {
      this._fireConsumer('$mediaplayerLoadedData', args);
    }
    play(args) {
      this._fireConsumer('$mediaplayerPlay', args);
    }
    playing(args) {
      this._fireConsumer('$mediaplayerPlaying', args);
      this._setState('Playing');
    }
    canplay(args) {
      this.videoEl.play();
      this._fireConsumer('$mediaplayerStart', args);
    }
    loadstart(args) {
      this._fireConsumer('$mediaplayerLoad', args);
    }
    seeked() {
      this._fireConsumer('$mediaplayerSeeked', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    seeking() {
      this._fireConsumer('$mediaplayerSeeking', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    durationchange(args) {
      this._fireConsumer('$mediaplayerDurationChange', args);
    }
    encrypted(args) {
      const video = args.videoElement;
      const event = args.event;
      // FIXME: Double encrypted events need to be properly filtered by Gstreamer
      if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
        this._previousInitData = event.initData;
        this._fireConsumer('$mediaplayerEncrypted', args);
      }
    }
    static _states() {
      return [class Playing extends this {
        $enter() {
          this._startUpdatingVideoTexture();
        }
        $exit() {
          this._stopUpdatingVideoTexture();
        }
        timeupdate() {
          this._fireConsumer('$mediaplayerProgress', {
            currentTime: this.videoEl.currentTime,
            duration: this.videoEl.duration || 1
          });
        }
        ended(args) {
          this._fireConsumer('$mediaplayerEnded', args);
          this._setState('');
        }
        pause(args) {
          this._fireConsumer('$mediaplayerPause', args);
          this._setState('Playing.Paused');
        }
        _clearSrc() {
          this._fireConsumer('$mediaplayerStop', {});
          this._setState('');
        }
        static _states() {
          return [class Paused extends this {}];
        }
      }];
    }
  }

  class localCookie {
    constructor(e) {
      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage,
        keys: this._getLocalStorageKeys
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies,
        keys: this._getCookieKeys
      };
    }
    _checkIfLocalStorageWorks() {
      if ("undefined" == typeof localStorage) return !1;
      try {
        return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
      } catch (e) {
        return !1;
      }
    }
    _getItemLocalStorage(e) {
      return window.localStorage.getItem(e);
    }
    _setItemLocalStorage(e, t) {
      return window.localStorage.setItem(e, t);
    }
    _removeItemLocalStorage(e) {
      return window.localStorage.removeItem(e);
    }
    _clearLocalStorage() {
      return window.localStorage.clear();
    }
    _getLocalStorageKeys() {
      return Object.keys(window.localStorage);
    }
    _getItemCookie(e) {
      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
        return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
      }(e) + "=([^;]*)"));
      return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
    }
    _setItemCookie(e, t) {
      var o = new Date(),
        r = new Date(o.getTime() + 15768e7);
      document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
    }
    _removeItemCookie(e) {
      document.cookie = "".concat(e, "=;Max-Age=-99999999;");
    }
    _clearCookies() {
      document.cookie.split(";").forEach(e => {
        document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
      });
    }
    _getCookieKeys() {
      return document.cookie.split(";").map(e => e.split("=")[0]);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initStorage = () => {
    Settings$1.get('platform', 'id');
    // todo: pass options (for example to force the use of cookies)
    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  const isWildcard = /^[!*$]$/;
  const hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  const isNamedGroup = /^\/:/;

  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */
  const stripRegex = function (route) {
    let char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';
    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }
    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  const createRegister = flags => {
    const reg = new Map()
    // store user defined and router
    // defined flags in register
  ;
    [...Object.keys(flags), ...Object.getOwnPropertySymbols(flags)].forEach(key => {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Request {
    constructor() {
      let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      let navArgs = arguments.length > 1 ? arguments[1] : undefined;
      let storeCaller = arguments.length > 2 ? arguments[2] : undefined;
      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;

      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */
      this._storeCaller = storeCaller;

      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */
      this._register = new Map();

      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */
      this._isCreated = false;

      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */
      this._isSharedInstance = false;

      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */
      this._cancelled = false;

      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */
      this._copiedHistoryState = null;

      // if there are arguments attached to navigate()
      // we store them in new request
      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      }
      // @todo: remove because we can simply check
      // ._storeCaller property
      this._register.set(symbols.store, this._storeCaller);
    }
    cancel() {
      Log$1.debug('[router]:', "cancelled ".concat(this._hash));
      this._cancelled = true;
    }
    get url() {
      return this._hash;
    }
    get register() {
      return this._register;
    }
    get hash() {
      return this._hash;
    }
    set hash(args) {
      this._hash = args;
    }
    get route() {
      return this._route;
    }
    set route(args) {
      this._route = args;
    }
    get provider() {
      return this._provider;
    }
    set provider(args) {
      this._provider = args;
    }
    get providerType() {
      return this._providerType;
    }
    set providerType(args) {
      this._providerType = args;
    }
    set page(args) {
      this._page = args;
    }
    get page() {
      return this._page;
    }
    set isCreated(args) {
      this._isCreated = args;
    }
    get isCreated() {
      return this._isCreated;
    }
    get isSharedInstance() {
      return this._isSharedInstance;
    }
    set isSharedInstance(args) {
      this._isSharedInstance = args;
    }
    get isCancelled() {
      return this._cancelled;
    }
    set copiedHistoryState(v) {
      this._copiedHistoryState = v;
    }
    get copiedHistoryState() {
      return this._copiedHistoryState;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Route {
    constructor() {
      let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // keep backwards compatible
      let type = ['on', 'before', 'after'].reduce((acc, type) => {
        return isFunction(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;
      if (type) {
        this._provider = {
          type,
          request: config[type]
        };
      }
    }
    get path() {
      return this._cfg.path;
    }
    get name() {
      return this._cfg.name;
    }
    get component() {
      return this._cfg.component;
    }
    get options() {
      return this._cfg.options;
    }
    get widgets() {
      return this._cfg.widgets;
    }
    get cache() {
      return this._cfg.cache;
    }
    get hook() {
      return this._cfg.hook;
    }
    get beforeNavigate() {
      return this._cfg.beforeNavigate;
    }
    get provider() {
      return this._provider;
    }
  }

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */
  const getFloor = route => {
    return stripRegex(route).split('/').length;
  };

  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */
  const getRoutesByFloor = floor => {
    const matches = [];
    // simple filter of level candidates
    for (let _ref of routes.entries()) {
      var _ref2 = _slicedToArray(_ref, 1);
      let route = _ref2[0];
      if (getFloor(route) === floor) {
        matches.push(route);
      }
    }
    return matches;
  };

  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */
  const getRouteByHash = hash => {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    const getUrlParts = /(\/?:?[^/]+)/g;
    // grab possible candidates from stored routes
    const candidates = getRoutesByFloor(getFloor(hash));
    // break hash down in chunks
    const hashParts = hash.match(getUrlParts) || [];

    // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash
    let regexStore = [];
    let matches = candidates.filter(route => {
      let isMatching = true;
      // replace regex in route with lookup id => @@{storeId}@@
      if (hasRegex.test(route)) {
        const regMatches = route.match(hasRegex);
        if (regMatches && regMatches.length) {
          route = regMatches.reduce((fullRoute, regex) => {
            const lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }
      const routeParts = route.match(getUrlParts) || [];
      for (let i = 0, j = routeParts.length; i < j; i++) {
        const routePart = routeParts[i];
        const hashPart = hashParts[i];

        // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash
        if (hasLookupId.test(routePart)) {
          const routeMatches = hasLookupId.exec(routePart);
          const storeId = routeMatches[1];
          const routeRegex = regexStore[storeId];

          // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line
          const regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
          if (regMatches && regMatches.length) {
            const expression = regMatches[1];
            const modifiers = regMatches[2];
            const regex = new RegExp("^/".concat(expression, "$"), modifiers);
            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }
      return isMatching;
    });
    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        const match = matches[matches.indexOf(hash)];
        return routes.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(a => {
          return isNamedGroup.test(a) ? -1 : 1;
        });
        // would be strange if this fails
        // but still we test
        if (routeExists(matches[0])) {
          return routes.get(matches[0]);
        }
      }
    }
    return false;
  };
  const getValuesFromHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    const getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    const hashParts = hash.match(getUrlParts) || [];
    const routeParts = path.match(getUrlParts) || [];
    const getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce((storage, value, index) => {
      const match = getNamedGroup.exec(value);
      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }
      return storage;
    }, new Map());
  };
  const getOption = (stack, prop) => {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    }
    // we explicitly return undefined since we're testing
    // for explicit test values
  };

  /**
   * create and return new Route instance
   * @param config
   */
  const createRoute = config => {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      let options = {
        preventStorage: true
      };
      if (isObject(config.options)) {
        options = {
          ...config.options,
          ...options
        };
      }
      config.options = options;
      // if configured add reference to bootRequest
      // as router after provider
      if (bootRequest) {
        config.after = bootRequest;
      }
    }
    return new Route(config);
  };

  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */
  const createRequest = (url, args, store) => {
    return new Request(url, args, store);
  };
  const getHashByName = obj => {
    if (!obj.to && !obj.name) {
      return false;
    }
    const route = getRouteByName(obj.to || obj.name);
    const hasDynamicGroup = /\/:([\w-]+)\/?/;
    let hash = route;

    // if route contains dynamic group
    // we replace them with the provided params
    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        const keys = Object.keys(obj.params);
        hash = keys.reduce((acc, key) => {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }
      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }
    return hash;
  };
  const getRouteByName = name => {
    for (let _ref3 of routes.entries()) {
      var _ref4 = _slicedToArray(_ref3, 2);
      let path = _ref4[0];
      let route = _ref4[1];
      if (route.name === name) {
        return path;
      }
    }
    return false;
  };
  const keepActivePageAlive = (route, request) => {
    if (isString(route)) {
      const routes = getRoutes();
      if (routes.has(route)) {
        route = routes.get(route);
      } else {
        return false;
      }
    }
    const register = request.register;
    const routeOptions = route.options;
    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }
    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emit = (function (page) {
    let events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!isArray(events)) {
      events = [events];
    }
    events.forEach(e => {
      const event = "_on".concat(ucfirst(e));
      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let activeWidget = null;
  const getReferences = () => {
    if (!widgetsHost) {
      return;
    }
    return widgetsHost.get().reduce((storage, widget) => {
      const key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };

  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */
  const updateWidgets = (widgets, page) => {
    // force lowercase lookup
    const configured = (widgets || []).map(ref => ref.toLowerCase());
    widgetsHost.forEach(widget => {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
      if (widget.visible) {
        emit(widget, ['activated'], page);
      }
    });
    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };
  const getWidgetByName = name => {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };

  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */
  const focusWidget = name => {
    const widget = getWidgetByName(name);
    if (widget) {
      setActiveWidget(widget);

      // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath
      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  const restoreFocus = () => {
    activeWidget = null;
    app._setState('');
  };
  const getActiveWidget = () => {
    return activeWidget;
  };
  const setActiveWidget = instance => {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const createComponent = (stage, type) => {
    return stage.c({
      type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */
  let history = [];
  const updateHistory = request => {
    const hash = getActiveHash();
    if (!hash) {
      return;
    }

    // navigate storage flag
    const register = request.register;
    const forceNavigateStore = register.get(symbols.store);

    // test preventStorage on route configuration
    const activeRoute = getRouteByHash(hash);
    const preventStorage = getOption(activeRoute.options, 'preventStorage');

    // we give prio to navigate storage flag
    let store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;
    if (store) {
      const toStore = hash.replace(/^\//, '');
      const location = locationInHistory(toStore);
      const stateObject = getStateObject(getActivePage(), request);
      const routerConfig = getRouterConfig();

      // store hash if it's not a part of history or flag for
      // storage of same hash is true
      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        const prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };
  const locationInHistory = hash => {
    for (let i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }
    return -1;
  };
  const getHistoryState = hash => {
    let state = null;
    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        const record = history[history.length - 1];
        // could be null
        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          const record = history[locationInHistory(hash)];
          state = record.state;
        }
      }
    }
    return state;
  };
  const replaceHistoryState = function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let hash = arguments.length > 1 ? arguments[1] : undefined;
    if (!history.length) {
      return;
    }
    const location = hash ? locationInHistory(hash) : history.length - 1;
    if (location !== -1 && isObject(state)) {
      history[location].state = state;
    }
  };
  const getStateObject = (page, request) => {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }
    return null;
  };
  const getHistory = () => {
    return history.slice(0);
  };
  const setHistory = function () {
    let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (isArray(arr)) {
      history = arr;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @type {Lightning.Application}
   */
  let application;

  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */
  let app;

  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */
  let pagesHost;

  /**
   * @type {Lightning.Stage}
   */
  let stage;

  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */
  let routerConfig;

  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */
  let widgetsHost;

  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */
  let rootHash;

  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */
  let bootRequest;

  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */
  let updateHash = true;

  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line
  let beforeEachRoute = async (from, to) => {
    return true;
  };

  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */
  let afterEachRoute = () => {};

  /**
   * All configured routes
   * @type {Map<string, object>}
   */
  let routes = new Map();

  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */
  let components = new Map();

  /**
   * Flag if router has been initialised
   * @type {boolean}
   */
  let initialised = false;

  /**
   * Current page being rendered on screen
   * @type {null}
   */
  let activePage = null;
  let activeHash;
  let activeRoute;

  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */
  let lastAcceptedHash;

  /**
   * With on()-data providing behaviour the Router forced the App
   * in a Loading state. When the data-provider resolves we want to
   * change the state back to where we came from
   */
  let previousState;
  const mixin = app => {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    }
    // if the app is using widgets we grab refs
    // and hide all the widgets
    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList;
      // hide all widgets on boot
      widgetsHost.forEach(w => w.visible = false);
    }
    app._handleBack = e => {
      step(-1);
      e.preventDefault();
    };
  };
  const bootRouter = (config, instance) => {
    let appInstance = config.appInstance,
      routes = config.routes;

    // if instance is provided and it's and Lightning Component instance
    if (instance && isPage(instance)) {
      app = instance;
    }
    if (!app) {
      app = appInstance || AppInstance;
    }
    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);
    if (isArray(routes)) {
      setup(config);
    } else if (isFunction(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };
  const setup = config => {
    if (!initialised) {
      init(config);
    }
    config.routes.forEach(r => {
      const path = cleanHash(r.path);
      if (!routeExists(path)) {
        const route = createRoute(r);
        routes.set(path, route);
        // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route
        if (route.component) {
          let type = route.component;
          if (isComponentConstructor(type)) {
            if (!routerConfig.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }
          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };
  const init = config => {
    rootHash = config.root;
    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }
    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }
    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }
    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }
    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');
      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }
    config.routes.forEach(item => {
      // replacing regexes with 'R' to avoid issues with pattern matching below
      const strippedPath = stripRegex(item.path);

      // Pattern to identify the last path of the route
      // It should start with "/:" + any word  and ends with "?"
      // It should be the last path of the route
      // valid => /player/:asset/:assetId? (:assetId is optional)
      // invalid => /player/:asset/:assetId?/test (:assetId? is not an optional path)
      // invalid => /player/:asset?/:assetId? (second path is not considered as an optional path)
      const pattern = /.*\/:.*?\?$/u;
      if (pattern.test(strippedPath)) {
        const optionalPath = item.path.substring(0, item.path.lastIndexOf('/'));
        const originalPath = item.path.substring(0, item.path.lastIndexOf('?'));
        item.path = originalPath;
        //Create another entry with the optional path
        let optionalItem = {
          ...item
        };
        optionalItem.path = optionalPath;
        config.routes.push(optionalItem);
      }
    });
    initialised = true;
  };
  const storeComponent = (route, type) => {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  const getComponent = route => {
    if (components.has(route)) {
      return components.get(route);
    }
    return null;
  };

  // delete existing route instance from memory
  const deleteCurrentInstance = route => {
    if (components.has(route) && pagesHost.getIndex(components.get(route)) !== -1) {
      pagesHost.remove(components.get(route));
      storeComponent(route, components.get(route)._routedType || components.get(route).constructor);
    }
  };

  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */
  const mustUpdateLocationHash = () => {
    if (!routerConfig || !routerConfig.size) {
      return false;
    }
    // we need support to either turn change hash off
    // per platform or per app
    const updateConfig = routerConfig.get('updateHash');
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };

  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */
  const onRequestResolved = request => {
    const hash = request.hash;
    const route = request.route;
    const register = request.register;
    const page = request.page;

    // clean up history if modifier is set
    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    }

    // we only update the stackLocation if a route
    // is not expired before it resolves
    storeComponent(route.path, page);
    if (request.isSharedInstance || !request.isCreated) {
      emit(page, 'changed');
    } else if (request.isCreated) {
      emit(page, 'mounted');
    }

    // only update widgets if we have a host
    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    }

    // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route
    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    }

    // provide history object to active page
    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }
    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path;

    // cleanup all cancelled requests
    for (let request of navigateQueue.values()) {
      if (request.isCancelled && request.hash) {
        navigateQueue.delete(request.hash);
      }
    }
    afterEachRoute(request);
    Log$1.info('[route]:', route.path);
    Log$1.info('[hash]:', hash);
  };
  const cleanUp = (page, request) => {
    const route = activeRoute;
    const register = request.register;
    const lazyDestroy = routerConfig.get('lazyDestroy');
    const destroyOnBack = routerConfig.get('destroyOnHistoryBack');
    const keepAlive = register.get('keepAlive');
    const isFromHistory = register.get(symbols.backtrack);
    let doCleanup = false;

    // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled
    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    }

    // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false
    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    }

    // if the current and new request share the same route blueprint
    if (activeRoute === request.route.path) {
      doCleanup = true;
    }
    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor);

      // actual remove of page from memory
      pagesHost.remove(page);

      // force texture gc() if configured
      // so we can cleanup textures in the same tick
      if (routerConfig.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        visible: false,
        alpha: 1
      });
    }
  };
  const getActiveHash = () => {
    return activeHash;
  };
  const setActivePage = page => {
    activePage = page;
  };
  const getActivePage = () => {
    return activePage;
  };
  const getActiveRoute = () => {
    return activeRoute;
  };
  const getLastHash = () => {
    return lastAcceptedHash;
  };
  const setLastHash = hash => {
    lastAcceptedHash = hash;
  };
  const setPreviousState = state => {
    previousState = state;
  };
  const getPreviousState = () => {
    return previousState;
  };
  const routeExists = key => {
    return routes.has(key);
  };
  const getRootHash = () => {
    return rootHash;
  };
  const getBootRequest = () => {
    return bootRequest;
  };
  const getRouterConfig = () => {
    return routerConfig;
  };
  const getRoutes = () => {
    return routes;
  };

  const isFunction = v => {
    return typeof v === 'function';
  };
  const isObject = v => {
    return typeof v === 'object' && v !== null;
  };
  const isBoolean = v => {
    return typeof v === 'boolean';
  };
  const isPage = v => {
    if (v instanceof Lightning$1.Element || isComponentConstructor(v)) {
      return true;
    }
    return false;
  };
  const isComponentConstructor = type => {
    return type.prototype && 'isComponent' in type.prototype;
  };
  const isArray = v => {
    return Array.isArray(v);
  };
  const ucfirst = v => {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  const isString = v => {
    return typeof v === 'string';
  };
  const isPromise = method => {
    let result;
    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    return isObject(result) && isFunction(result.then);
  };
  const cleanHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  const getConfigMap = () => {
    const routerSettings = Settings$1.get('platform', 'router');
    const isObj = isObject(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce((config, key) => {
      config.set(key, isObj ? routerSettings[key] : Settings$1.get('platform', key));
      return config;
    }, new Map());
  };
  const getQueryStringParams = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    const resumeHash = getResumeHash();
    if ((hash === '$' || !hash) && resumeHash) {
      if (isString(resumeHash)) {
        hash = resumeHash;
      }
    }
    let parse = '';
    const getQuery = /([?&].*)/;
    const matches = getQuery.exec(hash);
    const params = {};
    if (document.location && document.location.search) {
      parse = document.location.search;
    }
    if (matches && matches.length) {
      let hashParams = matches[1];
      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, '');
        // we parse hash params last so they we can always
        // override search params with hash params
        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }
    if (parse) {
      const urlParams = new URLSearchParams(parse);
      for (const _ref of urlParams.entries()) {
        var _ref2 = _slicedToArray(_ref, 2);
        const key = _ref2[0];
        const value = _ref2[1];
        params[key] = value;
      }
      return params;
    } else {
      return false;
    }
  };
  const objectToQueryString = obj => {
    if (!isObject(obj)) {
      return '';
    }
    return '?' + Object.keys(obj).map(key => {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  const symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  const dataHooks = {
    on: request => {
      setPreviousState(app.state || '');
      app._setState('Loading');
      return execProvider(request);
    },
    before: request => {
      return execProvider(request);
    },
    after: request => {
      try {
        execProvider(request, true);
      } catch (e) {
        // for now we fail silently
      }
      return Promise.resolve();
    }
  };
  const execProvider = (request, emitProvided) => {
    const route = request.route;
    const provider = route.provider;
    const expires = route.cache ? route.cache * 1000 : 0;
    const params = addPersistData(request);
    return provider.request(request.page, {
      ...params
    }).then(() => {
      request.page[symbols.expires] = Date.now() + expires;
      if (emitProvided) {
        emit(request.page, 'dataProvided');
      }
    }).catch(e => {
      request.page[symbols.expires] = Date.now();
      throw e;
    });
  };
  const addPersistData = _ref => {
    let page = _ref.page,
      route = _ref.route,
      hash = _ref.hash,
      _ref$register = _ref.register,
      register = _ref$register === void 0 ? new Map() : _ref$register;
    const urlValues = getValuesFromHash(hash, route.path);
    const queryParams = getQueryStringParams(hash);
    const pageData = new Map([...urlValues, ...register]);
    const params = {};

    // make dynamic url data available to the page
    // as instance properties
    for (let _ref2 of pageData) {
      var _ref3 = _slicedToArray(_ref2, 2);
      let name = _ref3[0];
      let value = _ref3[1];
      params[name] = value;
    }
    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    }

    // check navigation register for persistent data
    if (register.size) {
      const obj = {};
      for (let _ref4 of register) {
        var _ref5 = _slicedToArray(_ref4, 2);
        let k = _ref5[0];
        let v = _ref5[1];
        obj[k] = v;
      }
      page.persist = obj;
    }

    // make url data and persist data available
    // via params property
    page.params = params;
    emit(page, ['urlParams'], params);
    return params;
  };

  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */
  const isPageExpired = page => {
    if (!page[symbols.expires]) {
      return false;
    }
    const expires = page[symbols.expires];
    const now = Date.now();
    return now >= expires;
  };
  const hasProvider = path => {
    if (routeExists(path)) {
      const record = routes.get(path);
      return !!record.provider;
    }
    return false;
  };
  const getProvider = route => {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      const _routes$get = routes.get(route.path),
        provider = _routes$get.provider;
      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const fade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        if (o) {
          o.visible = false;
        }
        resolve();
      });
    });
  };
  const crossFade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      }
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        resolve();
      });
    });
  };
  const moveOnAxes = (axis, direction, i, o) => {
    const bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(resolve => {
      i.patch({
        ["".concat(axis)]: direction ? bounds * -1 : bounds,
        visible: true,
        smooth: {
          ["".concat(axis)]: [0, {
            duration: 0.4,
            delay: 0.2
          }]
        }
      });
      // out is optional
      if (o) {
        o.patch({
          ["".concat(axis)]: 0,
          smooth: {
            ["".concat(axis)]: [direction ? bounds : bounds * -1, {
              duration: 0.4,
              delay: 0.2
            }]
          }
        });
      }
      // resolve on y finish
      i.transition(axis).on('finish', () => {
        resolve();
      });
    });
  };
  const up = (i, o) => {
    return moveOnAxes('y', 0, i, o);
  };
  const down = (i, o) => {
    return moveOnAxes('y', 1, i, o);
  };
  const left = (i, o) => {
    return moveOnAxes('x', 0, i, o);
  };
  const right = (i, o) => {
    return moveOnAxes('x', 1, i, o);
  };
  var Transitions = {
    fade,
    crossFade,
    up,
    down,
    left,
    right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */
  const executeTransition = function (pageIn) {
    let pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const transition = pageIn.pageTransition || pageIn.easing;
    const hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    const transitionsDisabled = getRouterConfig().get('disableTransitions');
    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    }

    // default behaviour is a visibility toggle
    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;
      if (pageOut) {
        pageOut.visible = false;
      }
      return Promise.resolve();
    }
    if (transition) {
      let type;
      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }
      if (isPromise(type)) {
        return type;
      }
      if (isString(type)) {
        const fn = Transitions[type];
        if (fn) {
          return fn(pageIn, pageOut);
        }
      }

      // keep backwards compatible for now
      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        const smooth = function (p, v) {
          let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(resolve => {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', () => {
              resolve();
            });
          });
        };
        return pageIn.smoothIn({
          pageIn,
          smooth
        });
      }
    }
    return Transitions.crossFade(pageIn, pageOut);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * The actual loading of the component
   * */
  const load = async request => {
    let expired = false;
    try {
      request = await loader(request);
      if (request && !request.isCancelled) {
        // in case of on() providing we need to reset
        // app state;
        if (app.state === 'Loading') {
          if (getPreviousState() === 'Widgets') {
            app._setState('Widgets', [getActiveWidget()]);
          } else {
            app._setState('');
          }
        }
        // Do page transition if instance
        // is not shared between the routes
        if (!request.isSharedInstance && !request.isCancelled) {
          await executeTransition(request.page, getActivePage());
        }
      } else {
        expired = true;
      }
      // on expired we only cleanup
      if (expired || request.isCancelled) {
        Log$1.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
      } else {
        onRequestResolved(request);
        // resolve promise
        return request.page;
      }
    } catch (request) {
      if (!request.route) {
        console.error(request);
      } else if (!expired) {
        // @todo: revisit
        const route = request.route;
        // clean up history if modifier is set
        if (getOption(route.options, 'clearHistory')) {
          setHistory([]);
        } else if (!isWildcard.test(route.path)) {
          updateHistory(request);
        }
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
        handleError(request);
      }
    }
  };
  const loader = async request => {
    const route = request.route;
    const hash = request.hash;
    const register = request.register;

    // todo: grab from Route instance
    let type = getComponent(route.path);
    let isConstruct = isComponentConstructor(type);
    let provide = false;

    // if it's an instance bt we're not coming back from
    // history we test if we can re-use this instance
    if (!isConstruct && !register.get(symbols.backtrack)) {
      if (!mustReuse(route)) {
        type = type.constructor;
        isConstruct = true;
      }
    }

    // If page is Lightning Component instance
    if (!isConstruct) {
      request.page = type;
      // if we have have a data route for current page
      if (hasProvider(route.path)) {
        if (isPageExpired(type) || type[symbols.hash] !== hash) {
          provide = true;
        }
      }
      let currentRoute = getActivePage() && getActivePage()[symbols.route];
      // if the new route is equal to the current route it means that both
      // route share the Component instance and stack location / since this case
      // is conflicting with the way before() and after() loading works we flag it,
      // and check platform settings in we want to re-use instance
      if (route.path === currentRoute) {
        request.isSharedInstance = true;
        // since we're re-using the instance we must attach
        // historyState to the request to prevent it from
        // being overridden.
        if (isFunction(request.page.historyState)) {
          request.copiedHistoryState = request.page.historyState();
        }
      }
    } else {
      request.page = createComponent(stage, type);
      pagesHost.a(request.page);
      // test if need to request data provider
      if (hasProvider(route.path)) {
        provide = true;
      }
      request.isCreated = true;
    }

    // we store hash and route as properties on the page instance
    // that way we can easily calculate new behaviour on page reload
    request.page[symbols.hash] = hash;
    request.page[symbols.route] = route.path;
    try {
      if (provide) {
        // extract attached data-provider for route
        // we're processing
        const _getProvider = getProvider(route),
          loadType = _getProvider.type,
          provider = _getProvider.provider;

        // update running request
        request.provider = provider;
        request.providerType = loadType;
        await dataHooks[loadType](request);

        // we early exit if the current request is expired
        if (hash !== getLastHash()) {
          return false;
        } else {
          if (request.providerType !== 'after') {
            emit(request.page, 'dataProvided');
          }
          // resolve promise
          return request;
        }
      } else {
        addPersistData(request);
        return request;
      }
    } catch (e) {
      request.error = e;
      return Promise.reject(request);
    }
  };
  const handleError = request => {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log$1.error(request);
    }
    if (request.page && routeExists('!')) {
      navigate('!', {
        request
      }, false);
    }
  };
  const mustReuse = route => {
    const opt = getOption(route.options, 'reuseInstance');
    const config = routerConfig.get('reuseInstance');

    // route always has final decision
    if (isBoolean(opt)) {
      return opt;
    }
    return !(isBoolean(config) && config === false);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class RoutedApp extends Lightning$1.Component {
    static _template() {
      return {
        Pages: {
          forceZIndexContext: true
        },
        /**
         * This is a default Loading page that will be made visible
         * during data-provider on() you CAN override in child-class
         */
        Loading: {
          rect: true,
          w: 1920,
          h: 1080,
          color: 0xff000000,
          visible: false,
          zIndex: 99,
          Label: {
            mount: 0.5,
            x: 960,
            y: 540,
            text: {
              text: 'Loading..'
            }
          }
        }
      };
    }
    static _states() {
      return [class Loading extends this {
        $enter() {
          this.tag('Loading').visible = true;
        }
        $exit() {
          this.tag('Loading').visible = false;
        }
      }, class Widgets extends this {
        $enter(args, widget) {
          // store widget reference
          this._widget = widget;

          // since it's possible that this behaviour
          // is non-remote driven we force a recalculation
          // of the focuspath
          this._refocus();
        }
        _getFocused() {
          // we delegate focus to selected widget
          // so it can consume remotecontrol presses
          return this._widget;
        }

        // if we want to widget to widget focus delegation
        reload(widget) {
          this._widget = widget;
          this._refocus();
        }
        _handleKey() {
          const restoreFocus = routerConfig.get('autoRestoreRemote');
          /**
           * The Router used to delegate focus back to the page instance on
           * every unhandled key. This is barely usefull in any situation
           * so for now we offer the option to explicity turn that behaviour off
           * so we don't don't introduce a breaking change.
           */
          if (!isBoolean(restoreFocus) || restoreFocus === true) {
            Router.focusPage();
          }
        }
      }];
    }

    /**
     * Return location where pages need to be stored
     */
    get pages() {
      return this.tag('Pages');
    }

    /**
     * Tell router where widgets are stored
     */
    get widgets() {
      return this.tag('Widgets');
    }

    /**
     * we MUST register _handleBack method so the Router
     * can override it
     * @private
     */
    _handleBack() {}

    /**
     * We MUST return Router.activePage() so the new Page
     * can listen to the remote-control.
     */
    _getFocused() {
      return Router.getActivePage();
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
  rouThor ==[x]
   */
  let navigateQueue = new Map();
  let forcedHash = '';
  let resumeHash = '';

  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */
  const startRouter = (config, instance) => {
    bootRouter(config, instance);
    registerListener();
    start();
  };

  // start translating url
  const start = () => {
    let hash = (getHash() || '').replace(/^#/, '');
    const bootKey = '$';
    const params = getQueryStringParams(hash);
    const bootRequest = getBootRequest();
    const rootHash = getRootHash();
    const isDirectLoad = hash.indexOf(bootKey) !== -1;

    // prevent direct reload of wildcard routes
    // expect bootComponent
    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    }

    // store resume point for manual resume
    resumeHash = isDirectLoad ? rootHash : hash || rootHash;
    const ready = () => {
      if (!hash && rootHash) {
        if (isString(rootHash)) {
          navigate(rootHash);
        } else if (isFunction(rootHash)) {
          rootHash().then(res => {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    };
    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }
      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest)) {
      bootRequest(params).then(() => {
        ready();
      }).catch(e => {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };
  const handleBootError = e => {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };

  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */
  const navigate = function (url) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    if (isObject(url)) {
      url = getHashByName(url);
      if (!url) {
        return;
      }
    }
    let hash = getHash();
    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }
    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      if (mustUpdateLocationHash()) {
        setHash(url);
      } else {
        forcedHash = url;
        handleHashChange(url).then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(() => {
        app._refocus();
      }).catch(e => {
        console.error(e);
      });
    }
  };
  const queue = function (hash) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);
    if (!navigateQueue.has(hash)) {
      for (let request of navigateQueue.values()) {
        request.cancel();
      }
      const request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }
    return false;
  };

  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */
  const handleHashChange = async override => {
    const hash = cleanHash(override || getHash());
    const queueId = decodeURIComponent(hash);
    let request = navigateQueue.get(queueId);

    // handle hash updated manually
    if (!request && !navigateQueue.size) {
      request = queue(hash);
    }
    const route = getRouteByHash(hash);
    if (!route) {
      if (routeExists('*')) {
        navigate('*', {
          failedHash: hash
        });
      } else {
        console.error("Unable to navigate to: ".concat(hash));
      }
      return;
    }

    // update current processed request
    request.hash = hash;
    request.route = route;
    let result = await beforeEachRoute(getActiveHash(), request);

    // test if a local hook is configured for the route
    if (result && route.beforeNavigate) {
      result = await route.beforeNavigate(getActiveHash(), request);
    }
    if (isBoolean(result)) {
      // only if resolve value is explicitly true
      // we continue the current route request
      if (result) {
        return resolveHashChange(request);
      }
    } else {
      // if navigation guard didn't return true
      // we cancel the current request
      request.cancel();
      navigateQueue.delete(queueId);
      if (isString(result)) {
        navigate(result);
      } else if (isObject(result)) {
        let store = true;
        if (isBoolean(result.store)) {
          store = result.store;
        }
        navigate(result.path, result.params, store);
      }
    }
  };

  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */
  const resolveHashChange = request => {
    const hash = request.hash;
    const route = request.route;
    const queueId = decodeURIComponent(hash);
    // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself
    setLastHash(hash);
    if (route.path) {
      const component = getComponent(route.path);
      // if a hook is provided for the current route
      if (isFunction(route.hook)) {
        const urlParams = getValuesFromHash(hash, route.path);
        const params = {};
        for (const key of urlParams.keys()) {
          params[key] = urlParams.get(key);
        }
        route.hook(app, {
          ...params
        });
      }
      // if there is a component attached to the route
      if (component) {
        // force page to root state to prevent shared state issues
        const activePage = getActivePage();
        if (activePage) {
          const keepAlive = keepActivePageAlive(getActiveRoute(), request);
          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }
        if (isPage(component)) {
          load(request).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(contents => {
            return contents.default;
          }).then(module => {
            storeComponent(route.path, module);
            return load(request);
          }).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };

  /**
   * Directional step in history
   * @param level
   */
  const step = function () {
    let level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (!level || isNaN(level)) {
      return false;
    }
    const history = getHistory();
    // for now we only support negative numbers
    level = Math.abs(level);

    //Check whether we have any history avaialble or not
    if (history.length) {
      // for now we only support history back
      const route = history.splice(history.length - level, level)[0];
      // store changed history
      setHistory(history);
      return navigate(route.hash, {
        [symbols.backtrack]: true,
        [symbols.historyState]: route.state
      }, false);
    } else if (routerConfig.get('backtrack')) {
      const hashLastPart = /(\/:?[\w%\s-]+)$/;
      let hash = stripRegex(getHash());
      let floor = getFloor(hash);

      // test if we got deep-linked
      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, '');
          // if we have a configured route
          // we navigate to it
          if (getRouteByHash(hash)) {
            return navigate(hash, {
              [symbols.backtrack]: true
            }, false);
          }
        }
      }
    }

    // we can't step back past the amount
    // of history entries
    if (level > history.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }
      return app.application.closeApp();
    }
    return false;
  };

  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */
  const resume = () => {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction(resumeHash)) {
      resumeHash().then(res => {
        resumeHash = '';
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };

  /**
   * Force reload active hash
   */
  const reload = () => {
    if (!isNavigating()) {
      const hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };

  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */
  const isNavigating = () => {
    if (navigateQueue.size) {
      let isProcessing = false;
      for (let request of navigateQueue.values()) {
        if (!request.isCancelled) {
          isProcessing = true;
        }
      }
      return isProcessing;
    }
    return false;
  };
  const getResumeHash = () => {
    return resumeHash;
  };

  /**
   * By default we return the location hash
   * @returns {string}
   */
  let getHash = () => {
    return document.location.hash;
  };

  /**
   * Update location hash
   * @param url
   */
  let setHash = url => {
    document.location.hash = url;
  };

  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */
  const initRouter = config => {
    if (config.getHash) {
      getHash = config.getHash;
    }
    if (config.setHash) {
      setHash = config.setHash;
    }
  };

  /**
   * On hash change we start processing
   */
  const registerListener = () => {
    Registry.addEventListener(window, 'hashchange', async () => {
      if (mustUpdateLocationHash()) {
        try {
          await handleHashChange();
        } catch (e) {
          console.error(e);
        }
      }
    });
  };

  /**
   * Navigate to root hash
   */
  const root = () => {
    const rootHash = getRootHash();
    if (isString(rootHash)) {
      navigate(rootHash);
    } else if (isFunction(rootHash)) {
      rootHash().then(res => {
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  };
  const deletePage = param => {
    deleteCurrentInstance(param);
  };

  // export API
  var Router = {
    startRouter,
    navigate,
    resume,
    step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage() {
      // warning
      return getActivePage();
    },
    deletePage,
    getActiveRoute,
    getActiveHash,
    focusWidget,
    getActiveWidget,
    restoreFocus,
    isNavigating,
    getHistory,
    setHistory,
    getHistoryState,
    replaceHistoryState,
    getQueryStringParams,
    reload,
    symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root: root,
    /**
     * Deprecated api methods
     */
    setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let ApplicationInstance;
  var Launch = (App, appSettings, platformSettings, appData) => {
    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage();
    // Initialize plugins
    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }
    const app = Application(App, appData, platformSettings);
    initLightningSdkPlugin.log = Log$1;
    initLightningSdkPlugin.settings = Settings$1;
    initLightningSdkPlugin.ads = Ads;
    initLightningSdkPlugin.lightning = Lightning$1;
    ApplicationInstance = new app(appSettings);
    initLightningSdkPlugin.appInstance = ApplicationInstance;
    return ApplicationInstance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class SubtitleComponent extends Lightning$1.Component {
    static _template() {
      return {
        visible: false,
        rect: true,
        color: 0x90000000,
        shader: {
          type: Lightning$1.shaders.RoundedRectangle,
          radius: 5
        },
        Text: {
          y: 5,
          x: 20,
          text: {
            textColor: 0xffffffff,
            fontSize: 38,
            lineHeight: 38 * 1.4,
            textAlign: 'center',
            wordWrap: true,
            maxLines: 3,
            shadow: true,
            shadowColor: 0xff333333
          }
        }
      };
    }
    _init() {
      this._textTextureDefaults = new Lightning$1.textures.TextTexture(this.stage).cloneArgs();
      this.tag('Text').on('txLoaded', _ref => {
        let _source = _ref._source;
        this.w = _source.w + this.tag('Text').x * 2;
        this.h = _source.h;
        this.position();
      });
    }
    get textFormat() {
      const textTag = this.tag('Text').text;
      return {
        fontFace: textTag.fontFace || 'sans-serif',
        fontSize: textTag.fontSize,
        lineHeight: textTag.lineHeight,
        textAlign: textTag.textAlign,
        wordWrap: true,
        maxLines: textTag.maxLines
      };
    }
    show() {
      this.visible = true;
    }
    hide() {
      this.visible = false;
    }
    position() {
      this.x = this._calculateX(this.xPos);
      this.y = this._calculateY(this.yPos);
    }
    set viewportW(v) {
      this._viewportW = v;
      this.x = this._calculateX(this.xPos);
    }
    get viewportW() {
      return this._viewportW || this.application.finalW;
    }
    set viewportH(v) {
      this._viewportH = v;
      this.y = this._calculateY(this.yPos);
    }
    get viewportH() {
      return this._viewportH || this.application.finalH;
    }
    _calculateX(x) {
      if (x === 'center') {
        x = (this.viewportW - this.finalW) / 2;
      } else if (x === 'left') {
        x = 60;
      } else if (x === 'right') {
        x = this.viewportW - this.finalW - 60;
      }
      return x;
    }
    set xPos(v) {
      this._x = v;
      this.x = this._calculateX(v);
    }
    get xPos() {
      return this._x || 'center';
    }
    _calculateY(y) {
      if (y === 'center') {
        return (this.viewportH - this.finalH) / 2;
      } else if (y === 'top') {
        return 60;
      } else if (y === 'bottom') {
        return this.viewportH - this.finalH - 60;
      }
      return y;
    }
    set yPos(v) {
      this._y = v;
      this.y = this._calculateY(v);
    }
    get yPos() {
      return this._y || 'bottom';
    }
    set fontFamily(v) {
      this.tag('Text').text.fontFace = v;
    }
    set fontSize(v) {
      this.tag('Text').text.fontSize = v;
      this.tag('Text').text.lineHeight = v * 1.3;
    }
    set fontColor(v) {
      this.tag('Text').color = v;
    }
    set backgroundColor(v) {
      this.color = v;
    }
    _defineBreakpoint(text, breakpoint) {
      if (breakpoint >= this.maxWidth) return this.maxWidth;
      const info = Lightning$1.textures.TextTexture.renderer(this.stage, this.stage.platform.getDrawingCanvas(), {
        ...this._textTextureDefaults,
        ...this.textFormat,
        ...{
          wordWrapWidth: breakpoint
        },
        text
      })._calculateRenderInfo();
      if (info.width <= breakpoint && info.lines.length <= 2) {
        return breakpoint;
      } else {
        return this._defineBreakpoint(text, breakpoint * 1.25);
      }
    }
    set text(v) {
      this.alpha = 0;
      if (v && v.length) {
        const breakpoint = this._defineBreakpoint(v, 640);
        this.tag('Text').text.wordWrapWidth = breakpoint;
        this.tag('Text').text = v;
        this.alpha = 1;
      }
    }
    set textAlign(v) {
      this._textAlign = v;
      this.tag('Text').text.textAlign = v;
    }
    set maxWidth(v) {
      this._maxWidth = v;
    }
    get maxWidth() {
      return (this._maxWidth || 1200) - this.tag('Text').x * 2;
    }
    set maxLines(v) {
      this.tag('Text').text.maxLines = v;
    }
  }

  const getFreshImage = (url, dateString) => {
    if (!url) return '';
    if (!dateString) return url;
    const parsed = new Date(dateString).getTime();
    if (isNaN(parsed)) return url;
    const separator = url.indexOf('?') !== -1 ? '&' : '?';
    return "".concat(url).concat(separator, "t=").concat(parsed);
  };
  const formatBannerUrl = bannerUrl => {
    if (!bannerUrl) return '';
    const base = bannerUrl.split('=')[0];
    return "".concat(base, "=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj");
  };

  /**
   * Optimiza imágenes para Smart TV:
   * - Reduce resolución al tamaño real de cada componente (ahorro masivo de VRAM)
   * - Usa JPEG comprimido (decodificación mucho más liviana en CPUs de TV que WebP)
   * - Fuerza cabeceras CORS válidas mediante wsrv.nl para no romper texturas WebGL
   */
  const getOptimizedImageUrl = function (url) {
    let width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 320;
    let dateString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    let quality = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 68;
    if (!url) return '';
    let src = url.replace(/(maxresdefault|hqdefault|sddefault)\.jpg/i, 'mqdefault.jpg');
    if (dateString) {
      src = getFreshImage(src, dateString);
    }
    if (src.indexOf('ytimg.com') !== -1 || src.indexOf('youtube.com') !== -1 || src.indexOf('ggpht.com') !== -1 || src.indexOf('googleusercontent.com') !== -1) {
      return "https://wsrv.nl/?url=".concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality, "&output=jpg");
    }
    return src;
  };
  const formatTimeOnly = dateString => {
    if (!dateString) return '--:--';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '--:--';
    return date.toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };
  const isSameLocalDay = (dateA, dateB) => {
    if (!dateA || !dateB) return false;
    return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
  };

  const API_URL$1 = 'https://zappingstream-api.vercel.app/channels';
  const verifiedVideoIds = new Set();
  const deletedVideoIds = new Set();
  const validatedDayKeys = new Set();
  const DAY_MS = 24 * 60 * 60 * 1000;
  const SCHEDULE_WINDOW_DAYS = 8;
  const toDayKey = date => {
    if (!date) return '';
    return "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
  };
  const getEffectiveDateString = video => {
    if (!video) return '';
    return video.ActualStartTime || video.ScheduledStartTime || video.AddedAt || '';
  };
  const sortActiveStreams = list => {
    return list.slice().sort((a, b) => {
      if (a.IsPremiere && !b.IsPremiere) return 1;
      if (!a.IsPremiere && b.IsPremiere) return -1;
      const timeA = new Date(getEffectiveDateString(a) || 0).getTime();
      const timeB = new Date(getEffectiveDateString(b) || 0).getTime();
      return (isNaN(timeB) ? 0 : timeB) - (isNaN(timeA) ? 0 : timeA);
    });
  };
  const normalizeVideoMap = function (videos) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const _options$checkDateWin = options.checkDateWindow,
      checkDateWindow = _options$checkDateWin === void 0 ? false : _options$checkDateWin,
      _options$minTime = options.minTime,
      minTime = _options$minTime === void 0 ? 0 : _options$minTime,
      _options$maxTime = options.maxTime,
      maxTime = _options$maxTime === void 0 ? 0 : _options$maxTime,
      _options$requireSched = options.requireScheduled,
      requireScheduled = _options$requireSched === void 0 ? false : _options$requireSched;
    if (!videos || typeof videos !== 'object') return {};
    const entries = Array.isArray(videos) ? videos.map((v, idx) => [v && v.VideoId ? v.VideoId : String(idx), v]) : Object.entries(videos);
    const clean = {};
    const seenIds = new Set();
    for (let i = 0; i < entries.length; i++) {
      const _entries$i = _slicedToArray(entries[i], 2),
        v = _entries$i[1];
      if (!v || typeof v !== 'object') continue;
      if (v.ToBeCut === true || v.IsDeleted === true || v.Deleted === true) continue;
      const videoId = typeof v.VideoId === 'string' ? v.VideoId.trim() : '';
      if (!videoId || deletedVideoIds.has(videoId) || seenIds.has(videoId)) continue;
      if (requireScheduled && !v.ScheduledStartTime && !v.ActualStartTime) continue;
      const effectiveStart = getEffectiveDateString(v);
      if (checkDateWindow) {
        if (!effectiveStart) continue;
        const ts = new Date(effectiveStart).getTime();
        if (isNaN(ts) || ts < minTime || ts > maxTime) continue;
      }
      seenIds.add(videoId);
      clean[videoId] = {
        ...v,
        VideoId: videoId,
        EffectiveStartTime: effectiveStart
      };
    }
    return clean;
  };
  const findLatestPreviewThumb = channel => {
    const pickFrom = collection => {
      if (!collection || typeof collection !== 'object') return '';
      const list = Array.isArray(collection) ? collection : Object.values(collection);
      let bestThumb = '';
      let bestTime = -1;
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (!item || item.ToBeCut === true || !item.ThumbnailUrl) continue;
        const vid = typeof item.VideoId === 'string' ? item.VideoId.trim() : '';
        if (vid && deletedVideoIds.has(vid)) continue;
        const t = new Date(getEffectiveDateString(item) || 0).getTime();
        const safeT = isNaN(t) ? 0 : t;
        if (safeT >= bestTime) {
          bestTime = safeT;
          bestThumb = item.ThumbnailUrl;
        }
      }
      return bestThumb;
    };
    return pickFrom(channel.Past) || pickFrom(channel.Upcoming) || '';
  };
  const buildCleanChannel = (rawChannel, minTime, maxTime) => {
    const actives = normalizeVideoMap(rawChannel.Actives, {
      checkDateWindow: false
    });
    const upcoming = normalizeVideoMap(rawChannel.Upcoming, {
      checkDateWindow: true,
      minTime,
      maxTime,
      requireScheduled: true
    });
    const past = normalizeVideoMap(rawChannel.Past, {
      checkDateWindow: true,
      minTime,
      maxTime
    });
    const activeList = sortActiveStreams(Object.values(actives));
    return {
      ...rawChannel,
      LatestPreviewThumb: rawChannel.LatestPreviewThumb || findLatestPreviewThumb(rawChannel),
      Actives: actives,
      Upcoming: upcoming,
      Past: past,
      ActiveList: activeList
    };
  };
  const probeSingleVideo = function (videoId) {
    let timeoutMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    if (!videoId) return Promise.resolve(false);
    if (deletedVideoIds.has(videoId)) return Promise.resolve(false);
    if (verifiedVideoIds.has(videoId)) return Promise.resolve(true);
    return new Promise(resolve => {
      if (typeof Image === 'undefined') {
        verifiedVideoIds.add(videoId);
        resolve(true);
        return;
      }
      const img = new Image();
      let settled = false;
      const finish = isValid => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        img.onload = null;
        img.onerror = null;
        img.src = '';
        if (isValid) {
          verifiedVideoIds.add(videoId);
        } else {
          deletedVideoIds.add(videoId);
        }
        resolve(isValid);
      };
      const timer = setTimeout(() => {
        finish(true);
      }, timeoutMs);
      img.onload = () => {
        if (img.naturalWidth > 0 && img.naturalWidth <= 120 && img.naturalHeight <= 90) {
          finish(false);
        } else {
          finish(true);
        }
      };
      img.onerror = () => {
        finish(false);
      };
      img.src = "https://i.ytimg.com/vi/".concat(encodeURIComponent(videoId), "/mqdefault.jpg");
    });
  };
  const probeVideoBatch = async function (videoIds) {
    let concurrency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
    let timeoutMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
    const pending = videoIds.filter(id => id && !verifiedVideoIds.has(id) && !deletedVideoIds.has(id));
    if (pending.length === 0) return 0;
    let cursor = 0;
    let newlyDeleted = 0;
    const worker = async () => {
      while (cursor < pending.length) {
        const idx = cursor++;
        const id = pending[idx];
        const ok = await probeSingleVideo(id, timeoutMs);
        if (!ok) newlyDeleted++;
      }
    };
    const workersCount = Math.min(concurrency, pending.length);
    const workers = [];
    for (let i = 0; i < workersCount; i++) {
      workers.push(worker());
    }
    await Promise.all(workers);
    return newlyDeleted;
  };
  const purgeDeletedFromChannels = channels => {
    if (!Array.isArray(channels) || deletedVideoIds.size === 0) return channels;
    const filterRecord = record => {
      if (!record) return {};
      const out = {};
      const keys = Object.keys(record);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const v = record[k];
        if (v && v.VideoId && !deletedVideoIds.has(v.VideoId)) {
          out[k] = v;
        }
      }
      return out;
    };
    return channels.map(ch => {
      const actives = filterRecord(ch.Actives);
      const upcoming = filterRecord(ch.Upcoming);
      const past = filterRecord(ch.Past);
      return {
        ...ch,
        Actives: actives,
        Upcoming: upcoming,
        Past: past,
        ActiveList: sortActiveStreams(Object.values(actives))
      };
    });
  };
  const collectVideoIdsForDate = function (channels, targetDate) {
    let includeAllActives = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const ids = new Set();
    if (!Array.isArray(channels)) return [];
    for (let i = 0; i < channels.length; i++) {
      const ch = channels[i];
      const buckets = [ch.Actives, ch.Upcoming, ch.Past];
      if (includeAllActives && ch.Actives) {
        Object.values(ch.Actives).forEach(v => {
          if (v && v.VideoId) ids.add(v.VideoId);
        });
      }
      if (targetDate) {
        buckets.forEach(bucket => {
          if (!bucket) return;
          Object.values(bucket).forEach(v => {
            if (!v || !v.VideoId) return;
            const dateStr = v.EffectiveStartTime || getEffectiveDateString(v);
            if (!dateStr) return;
            const d = new Date(dateStr);
            if (!isNaN(d.getTime()) && isSameLocalDay(d, targetDate)) {
              ids.add(v.VideoId);
            }
          });
        });
      }
    }
    return Array.from(ids);
  };
  const ensureDateChannelsValidated = async (channels, targetDate) => {
    if (!Array.isArray(channels) || channels.length === 0 || !targetDate) {
      return {
        channels,
        removedCount: 0
      };
    }
    const dayKey = toDayKey(targetDate);
    const ids = collectVideoIdsForDate(channels, targetDate, false);
    const unverified = ids.filter(id => !verifiedVideoIds.has(id) && !deletedVideoIds.has(id));
    if (unverified.length === 0) {
      validatedDayKeys.add(dayKey);
      return {
        channels: purgeDeletedFromChannels(channels),
        removedCount: 0
      };
    }
    const removedCount = await probeVideoBatch(unverified, 14, 1800);
    validatedDayKeys.add(dayKey);
    return {
      channels: purgeDeletedFromChannels(channels),
      removedCount
    };
  };
  const isDatePrevalidated = targetDate => {
    if (!targetDate) return true;
    return validatedDayKeys.has(toDayKey(targetDate));
  };

  /**
   * Espera a que la pantalla inicial termine de descargar sus logos y miniaturas visibles
   * y recién después pre-valida suavemente la programación de Hoy sin competir por red ni CPU.
   * Los demás días se validan bajo demanda justo antes de renderizarse en ScheduleGrid.
   */
  const prevalidateAllScheduleChannels = async (channels, onUpdated) => {
    if (!Array.isArray(channels) || channels.length === 0) return;

    // Dejar 4 segundos libres para que las tarjetas visibles carguen a máxima velocidad en la TV
    await new Promise(r => setTimeout(r, 4000));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayKey = toDayKey(today);
    if (validatedDayKeys.has(todayKey)) return;
    const todayIds = collectVideoIdsForDate(channels, today, false).filter(id => !verifiedVideoIds.has(id) && !deletedVideoIds.has(id));
    let totalRemoved = 0;
    const chunkSize = 8;
    for (let i = 0; i < todayIds.length; i += chunkSize) {
      const slice = todayIds.slice(i, i + chunkSize);
      const removed = await probeVideoBatch(slice, 6, 2000);
      totalRemoved += removed;
      await new Promise(r => setTimeout(r, 180));
    }
    validatedDayKeys.add(todayKey);
    if (totalRemoved > 0 && typeof onUpdated === 'function') {
      onUpdated(purgeDeletedFromChannels(channels));
    }
  };
  const getChannels = async function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const _options$forceRefresh = options.forceRefresh,
      forceRefresh = _options$forceRefresh === void 0 ? false : _options$forceRefresh;
    if (forceRefresh) {
      verifiedVideoIds.clear();
      validatedDayKeys.clear();
    }
    try {
      const response = await fetch(API_URL$1);
      if (!response.ok) {
        throw new Error("Error HTTP: ".concat(response.status, " - ").concat(response.statusText));
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        return [];
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const minTime = today.getTime() - SCHEDULE_WINDOW_DAYS * DAY_MS;
      const maxTime = today.getTime() + (SCHEDULE_WINDOW_DAYS + 1) * DAY_MS;

      // 1. Limpieza sincrónica de ToBeCut, IDs vacíos, duplicados y ventana de fechas
      const sanitized = data.filter(ch => ch && ch.ChannelName).map(ch => buildCleanChannel(ch, minTime, maxTime));

      // 2. Validar únicamente las señales activas (pocas y rápidas) al inicio para no frenar el arranque en TV
      const activeIds = collectVideoIdsForDate(sanitized, null, true);
      await probeVideoBatch(activeIds, 16, 1800);
      return purgeDeletedFromChannels(sanitized);
    } catch (err) {
      console.error('Error al obtener los canales:', err);
      throw err;
    }
  };

  const API_URL = 'https://zappingstream-api.vercel.app/provinces';
  const getProvinces = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error HTTP: ".concat(response.status, " - ").concat(response.statusText));
      }
      const data = await response.json();
      const cityProvinceMap = {};
      const provinces = [];
      data.forEach(prov => {
        provinces.push(prov.name);
        prov.cities.forEach(city => {
          cityProvinceMap[city] = prov.name;
        });
      });
      return {
        cityProvinceMap,
        provinces: provinces.sort()
      };
    } catch (error) {
      console.error('Error al obtener las provincias:', error);
      throw error;
    }
  };

  // ============================================
  // Paleta de Colores Smart TV (Estilo Netflix)
  // ============================================
  const COLORS = {
    TRANSPARENT: 0x00000000,
    // Fondos cinematográficos de alto contraste para TV
    BG_BLACK: 0xff0a0a0c,
    BG_CANVAS: 0xff141414,
    // Fondo principal Netflix (#141414)
    BG_DARK: 0xff18181c,
    // Superficie de tarjetas
    BG_CARD: 0xff1c1c22,
    // Tarjeta en reposo
    BG_PANEL: 0xff26262e,
    // Píldoras y botones secundarios
    BG_ELEVATED: 0xff32323d,
    // Superficie elevada

    // Textos calibrados para lectura a 3 metros (10-foot UI)
    TEXT_WHITE: 0xffffffff,
    TEXT_LIGHT: 0xffe5e5e5,
    // Títulos de filas estilo Netflix
    TEXT_GRAY: 0xffa3a3a3,
    // Subtítulos y metadatos
    TEXT_MUTED: 0xff737373,
    // Acentos Netflix + Identidad Zapping
    NETFLIX_RED: 0xffe50914,
    // Rojo principal Netflix / En Vivo
    NETFLIX_RED_DARK: 0xffb20710,
    FOCUS_WHITE: 0xffffffff,
    // Anillo y foco principal de alto contraste en TV
    ACCENT_BLUE: 0xff38b6ff,
    // Acento secundario de marca

    // Badges de estado
    LIVE_BADGE: 0xffe50914,
    PREMIERE_BADGE: 0xff2563eb,
    // Bordes y divisores
    BORDER_LIGHT: 0xff3f3f46,
    BORDER_DARK: 0xff27272a,
    BORDER_DISABLED: 0xff52525b
  };

  // ============================================
  // Escala tipográfica 10-foot UI (1920x1080)
  // ============================================
  const TYPOGRAPHY = {
    FONT_FAMILY: 'Regular',
    FONT_SIZE_XS: 16,
    FONT_SIZE_SMALL: 19,
    FONT_SIZE_NORMAL: 22,
    FONT_SIZE_LARGE: 26,
    FONT_SIZE_XLARGE: 36,
    FONT_SIZE_HERO: 46
  };

  // ============================================
  // Radios de bordes
  // ============================================
  const BORDER_RADIUS = {
    SMALL: 4,
    MEDIUM: 6,
    LARGE: 10,
    PILL: 26,
    CIRCLE: 50
  };

  // ============================================
  // Espaciado TV (incluye margen seguro / overscan)
  // ============================================
  const SPACING = {
    SAFE_X: 64,
    SAFE_Y: 40,
    GAP_SMALL: 8,
    GAP_MEDIUM: 16,
    GAP_LARGE: 24,
    GAP_XLARGE: 32,
    PADDING_SMALL: 8,
    PADDING_MEDIUM: 14,
    PADDING_LARGE: 24
  };

  // ============================================
  // Tamaños de componentes
  // ============================================
  const COMPONENT_SIZE = {
    BUTTON_HEIGHT: 52,
    BUTTON_HEIGHT_SMALL: 38,
    CARD_WIDTH: 340,
    CARD_HEIGHT: 248,
    LOGO_SMALL: 36,
    LOGO_MEDIUM: 68,
    ARROW_SIZE: 44
  };

  class NavPill extends Lightning$1.Component {
    static _template() {
      return {
        h: 50,
        rect: true,
        color: COLORS.TRANSPARENT,
        shader: {
          type: Lightning$1.shaders.RoundedRectangle,
          radius: BORDER_RADIUS.MEDIUM
        },
        Label: {
          mount: 0.5,
          text: {
            text: '',
            fontSize: TYPOGRAPHY.FONT_SIZE_NORMAL,
            fontFace: TYPOGRAPHY.FONT_FAMILY,
            textColor: COLORS.TEXT_LIGHT,
            maxLines: 1,
            textOverflow: 'ellipsis'
          }
        },
        ActiveBar: {
          alpha: 0,
          rect: true,
          h: 4,
          y: 46,
          color: COLORS.NETFLIX_RED
        }
      };
    }
    _init() {
      this._syncGeometry();
      this._updateAppearance();
    }
    _syncGeometry() {
      const width = this.w || 160;
      this.tag('Label').patch({
        x: width / 2,
        y: 26,
        text: {
          wordWrapWidth: width > 24 ? width - 24 : width
        }
      });
      this.tag('ActiveBar').patch({
        x: Math.round(width * 0.18),
        w: Math.round(width * 0.64)
      });
    }
    set label(v) {
      this.tag('Label').text.text = v;
    }
    set variant(v) {
      this._variant = v; // 'tab' | 'filter' | 'action'
      this._updateAppearance();
    }
    set isActive(v) {
      this._isActiveFlag = Boolean(v);
      this._updateAppearance();
    }
    _updateAppearance() {
      const focused = this.hasFocus();
      const isTab = this._variant === 'tab';
      if (focused) {
        this.patch({
          color: COLORS.FOCUS_WHITE,
          Label: {
            text: {
              textColor: COLORS.BG_BLACK,
              fontStyle: 'bold'
            }
          },
          ActiveBar: {
            alpha: this._isActiveFlag && isTab ? 1 : 0
          }
        });
        return;
      }
      if (isTab) {
        this.patch({
          color: COLORS.TRANSPARENT,
          Label: {
            text: {
              textColor: this._isActiveFlag ? COLORS.TEXT_WHITE : COLORS.TEXT_GRAY,
              fontStyle: this._isActiveFlag ? 'bold' : 'normal'
            }
          },
          ActiveBar: {
            alpha: this._isActiveFlag ? 1 : 0
          }
        });
        return;
      }

      // Filtros y acciones rápidas
      this.patch({
        color: this._isActiveFlag ? 0xff2c1215 : COLORS.BG_PANEL,
        Label: {
          text: {
            textColor: this._isActiveFlag ? COLORS.TEXT_WHITE : COLORS.TEXT_LIGHT,
            fontStyle: this._isActiveFlag ? 'bold' : 'normal'
          }
        },
        ActiveBar: {
          alpha: this._isActiveFlag ? 1 : 0
        }
      });
    }
    _focus() {
      this._updateAppearance();
    }
    _unfocus() {
      this._updateAppearance();
    }
    _handleEnter() {
      this.fireAncestors('$onHeaderAction', this.ref);
      return true;
    }
  }
  class AppHeader extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 96,
        Backdrop: {
          w: 1920,
          h: 96,
          rect: true,
          color: 0xf20e0e12
        },
        BottomHairline: {
          y: 95,
          w: 1920,
          h: 1,
          rect: true,
          color: 0x22ffffff
        },
        Logo: {
          x: 64,
          y: 10,
          w: 124,
          h: 76,
          src: Utils.asset('images/logo.png')
        },
        Controls: {
          x: 0,
          y: 23,
          ModeCards: {
            type: NavPill,
            ref: 'ModeCards',
            x: 216,
            w: 132,
            variant: 'tab'
          },
          ModeGrid: {
            type: NavPill,
            ref: 'ModeGrid',
            x: 358,
            w: 214,
            variant: 'tab'
          },
          Sep1: {
            x: 588,
            y: 11,
            w: 1,
            h: 28,
            rect: true,
            color: 0x33ffffff
          },
          Search: {
            type: NavPill,
            ref: 'Search',
            x: 608,
            w: 256,
            variant: 'filter'
          },
          Province: {
            type: NavPill,
            ref: 'Province',
            x: 878,
            w: 266,
            variant: 'filter'
          },
          City: {
            type: NavPill,
            ref: 'City',
            x: 1158,
            w: 252,
            variant: 'filter'
          },
          Refresh: {
            type: NavPill,
            ref: 'Refresh',
            x: 1506,
            w: 190,
            variant: 'action'
          },
          Info: {
            type: NavPill,
            ref: 'Info',
            x: 1710,
            w: 146,
            variant: 'action'
          }
        }
      };
    }
    _construct() {
      this._index = 0;
      this._controls = ['ModeCards', 'ModeGrid', 'Search', 'Province', 'City', 'Refresh', 'Info'];
      this._hasCities = true;
      this._isRefreshing = false;
    }
    set config(data) {
      const searchText = data.searchText,
        viewMode = data.viewMode,
        selectedProvince = data.selectedProvince,
        selectedCity = data.selectedCity,
        cities = data.cities,
        isRefreshing = data.isRefreshing,
        callbacks = data.callbacks;
      this._callbacks = callbacks || {};
      this._isRefreshing = Boolean(isRefreshing);
      this.tag('Controls.ModeCards').label = 'Inicio';
      this.tag('Controls.ModeCards').isActive = viewMode === 'cards';
      this.tag('Controls.ModeGrid').label = 'Transmisiones';
      this.tag('Controls.ModeGrid').isActive = viewMode === 'grid';
      this.tag('Controls.Search').label = searchText ? "\uD83D\uDD0D \"".concat(searchText, "\"") : '🔍 Buscar';
      this.tag('Controls.Search').isActive = Boolean(searchText);
      this.tag('Controls.Province').label = selectedProvince ? "\uD83D\uDCCD ".concat(selectedProvince) : 'Provincia: Todas';
      this.tag('Controls.Province').isActive = Boolean(selectedProvince);
      this.tag('Controls.City').label = selectedCity ? "\uD83D\uDCCD ".concat(selectedCity) : 'Ciudad: Todas';
      this.tag('Controls.City').isActive = Boolean(selectedCity);
      this._hasCities = Boolean(cities && cities.length > 0);
      this.tag('Controls.City').alpha = this._hasCities ? 1 : 0.4;
      this.tag('Controls.Refresh').label = this._isRefreshing ? '↻ Cargando...' : '↻ Actualizar';
      this.tag('Controls.Refresh').alpha = this._isRefreshing ? 0.55 : 1;
      this.tag('Controls.Info').label = 'ℹ Info';
    }
    _handleLeft() {
      if (this._index > 0) {
        this._index--;
        if (this._controls[this._index] === 'City' && !this._hasCities && this._index > 0) {
          this._index--;
        }
        this._refocus();
        return true;
      }
      return false;
    }
    _handleRight() {
      if (this._index < this._controls.length - 1) {
        this._index++;
        if (this._controls[this._index] === 'City' && !this._hasCities && this._index < this._controls.length - 1) {
          this._index++;
        }
        this._refocus();
        return true;
      }
      return false;
    }
    _getFocused() {
      const controlRef = this._controls[this._index];
      return this.tag("Controls.".concat(controlRef));
    }
    $onHeaderAction(ref) {
      if (!this._callbacks) return;
      switch (ref) {
        case 'ModeCards':
          if (this._callbacks.onViewModeChange) this._callbacks.onViewModeChange('cards');
          break;
        case 'ModeGrid':
          if (this._callbacks.onViewModeChange) this._callbacks.onViewModeChange('grid');
          break;
        case 'Search':
          if (this._callbacks.onSearchClick) this._callbacks.onSearchClick();
          break;
        case 'Province':
          if (this._callbacks.onProvinceClick) this._callbacks.onProvinceClick();
          break;
        case 'City':
          if (this._hasCities && this._callbacks.onCityClick) this._callbacks.onCityClick();
          break;
        case 'Refresh':
          if (!this._isRefreshing && this._callbacks.onRefresh) this._callbacks.onRefresh();
          break;
        case 'Info':
          if (this._callbacks.onShowInfo) this._callbacks.onShowInfo();
          break;
      }
    }
  }

  class AppFooter extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 48,
        rect: true,
        color: 0xeb0b0b0e,
        TopLine: {
          w: 1920,
          h: 1,
          rect: true,
          color: 0x1fffffff
        },
        Hints: {
          x: 64,
          y: 25,
          mountY: 0.5,
          text: {
            text: 'OK  Seleccionar     •     ◀ ▶ ▲ ▼  Navegar     •     ↩ ATRÁS  Menú superior',
            fontSize: 18,
            fontFace: TYPOGRAPHY.FONT_FAMILY,
            textColor: COLORS.TEXT_GRAY
          }
        },
        Stats: {
          x: 1856,
          y: 25,
          mountX: 1,
          mountY: 0.5,
          text: {
            text: '',
            fontSize: 18,
            fontFace: TYPOGRAPHY.FONT_FAMILY,
            textColor: COLORS.TEXT_MUTED
          }
        }
      };
    }
    set config(data) {
      if (!data) return;
      const viewMode = data.viewMode,
        _data$liveCount = data.liveCount,
        liveCount = _data$liveCount === void 0 ? 0 : _data$liveCount,
        _data$totalCount = data.totalCount,
        totalCount = _data$totalCount === void 0 ? 0 : _data$totalCount,
        _data$isRefreshing = data.isRefreshing,
        isRefreshing = _data$isRefreshing === void 0 ? false : _data$isRefreshing;
      if (viewMode === 'grid') {
        this.tag('Hints').text.text = 'OK  Ver transmisión / Info canal     •     ◀ ▶  Cambiar horario o día     •     ▲ ▼  Cambiar canal     •     ↩ ATRÁS  Menú';
      } else {
        this.tag('Hints').text.text = 'OK  Ver transmisión     •     ◀ ▶ ▲ ▼  Explorar catálogo     •     ↩ ATRÁS  Menú superior';
      }
      if (isRefreshing) {
        this.tag('Stats').text.text = 'Actualizando programación...';
      } else if (totalCount > 0) {
        this.tag('Stats').text.text = "".concat(liveCount, " en vivo  \u2022  ").concat(totalCount, " canales");
      } else {
        this.tag('Stats').text.text = '';
      }
    }
  }

  class HeroBanner extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 350,
        clipping: true,
        BaseBg: {
          w: 1920,
          h: 350,
          rect: true,
          color: COLORS.BG_CANVAS
        },
        ArtworkWrap: {
          x: 840,
          y: 0,
          w: 1080,
          h: 350,
          clipping: true,
          Backdrop: {
            x: 0,
            y: -45,
            w: 1080,
            h: 440,
            alpha: 0
          },
          LeftGradient: {
            x: 0,
            y: 0,
            w: 520,
            h: 350,
            rect: true,
            colorLeft: COLORS.BG_CANVAS,
            colorRight: 0x00141414
          },
          RightGradient: {
            x: 900,
            y: 0,
            w: 180,
            h: 350,
            rect: true,
            colorLeft: 0x00141414,
            colorRight: 0xc0141414
          },
          TopGradient: {
            x: 0,
            y: 0,
            w: 1080,
            h: 70,
            rect: true,
            colorTop: 0xd9141414,
            colorBottom: 0x00141414
          },
          BottomGradient: {
            x: 0,
            y: 220,
            w: 1080,
            h: 130,
            rect: true,
            colorTop: 0x00141414,
            colorBottom: COLORS.BG_CANVAS
          }
        },
        Info: {
          x: 64,
          y: 22,
          StatusBadge: {
            h: 30,
            w: 140,
            rect: true,
            color: COLORS.NETFLIX_RED,
            Label: {
              mount: 0.5,
              x: 70,
              y: 16,
              text: {
                text: 'EN VIVO',
                fontSize: 16,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE
              }
            }
          },
          MetaText: {
            x: 156,
            y: 4,
            text: {
              text: '',
              fontSize: 20,
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_GRAY,
              maxLines: 1,
              wordWrapWidth: 740,
              textOverflow: 'ellipsis'
            }
          },
          Avatar: {
            x: 0,
            y: 48,
            w: 46,
            h: 46,
            alpha: 0
          },
          ChannelName: {
            x: 0,
            y: 42,
            text: {
              text: '',
              fontSize: TYPOGRAPHY.FONT_SIZE_HERO,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_WHITE,
              maxLines: 1,
              wordWrapWidth: 860,
              textOverflow: 'ellipsis'
            }
          },
          Headline: {
            x: 0,
            y: 108,
            text: {
              text: '',
              fontSize: 26,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_LIGHT,
              maxLines: 2,
              wordWrapWidth: 880,
              lineHeight: 34,
              textOverflow: 'ellipsis'
            }
          },
          Description: {
            x: 0,
            y: 184,
            text: {
              text: '',
              fontSize: 20,
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_GRAY,
              maxLines: 2,
              wordWrapWidth: 860,
              lineHeight: 28,
              textOverflow: 'ellipsis'
            }
          },
          CtaHint: {
            x: 0,
            y: 256,
            h: 44,
            w: 380,
            rect: true,
            color: 0x24ffffff,
            Label: {
              mountY: 0.5,
              x: 18,
              y: 23,
              text: {
                text: '▶  OK para reproducir',
                fontSize: 20,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE
              }
            }
          }
        }
      };
    }
    _init() {
      this._backdropTimer = null;
      this._currentBackdropSrc = '';
      this.tag('ArtworkWrap.Backdrop').on('txLoaded', () => {
        this.tag('ArtworkWrap.Backdrop').alpha = 0.88;
      });
      this.tag('ArtworkWrap.Backdrop').on('txError', () => {
        this.tag('ArtworkWrap.Backdrop').alpha = 0;
      });
      this.tag('Info.Avatar').on('txLoaded', () => {
        this.tag('Info.Avatar').alpha = 1;
      });
      this.tag('Info.Avatar').on('txError', () => {
        this.tag('Info.Avatar').alpha = 0;
      });
    }
    _detach() {
      if (this._backdropTimer) {
        clearTimeout(this._backdropTimer);
        this._backdropTimer = null;
      }
    }
    set featured(data) {
      if (!data || !data.channel) {
        this.alpha = 0;
        return;
      }
      this.alpha = 1;
      const channel = data.channel,
        _data$provinceName = data.provinceName,
        provinceName = _data$provinceName === void 0 ? '' : _data$provinceName;
      const actives = channel.ActiveList || Object.values(channel.Actives || {});
      const mainActive = actives.length > 0 ? actives[0] : null;
      const isLive = Boolean(mainActive);
      const isPremiere = Boolean(mainActive && mainActive.IsPremiere);
      let badgeText = 'ON DEMAND';
      let badgeColor = COLORS.BG_ELEVATED;
      let badgeW = 144;
      if (isLive) {
        badgeText = isPremiere ? '★ ESTRENO' : '● EN VIVO';
        badgeColor = isPremiere ? COLORS.PREMIERE_BADGE : COLORS.NETFLIX_RED;
        badgeW = isPremiere ? 136 : 128;
      }
      this.tag('Info.StatusBadge').patch({
        w: badgeW,
        color: badgeColor,
        Label: {
          x: badgeW / 2,
          text: {
            text: badgeText
          }
        }
      });
      const metaParts = [];
      if (channel.ChannelCity) {
        metaParts.push(provinceName && provinceName !== channel.ChannelCity ? "".concat(channel.ChannelCity, ", ").concat(provinceName) : channel.ChannelCity);
      }
      if (actives.length > 1) {
        metaParts.push("".concat(actives.length, " transmisiones en simult\xE1neo"));
      } else if (!isLive) {
        const upcomingCount = channel.Upcoming ? Object.keys(channel.Upcoming).length : 0;
        if (upcomingCount > 0) {
          metaParts.push("".concat(upcomingCount, " pr\xF3ximas en gu\xEDa"));
        }
      }
      this.tag('Info.MetaText').patch({
        x: badgeW + 16,
        text: {
          text: metaParts.join('  •  ')
        }
      });
      const avatarUrl = channel.ChannelImgUrl ? getOptimizedImageUrl(channel.ChannelImgUrl, 80, '', 65) : '';
      if (avatarUrl) {
        if (this._lastAvatarUrl !== avatarUrl) {
          this._lastAvatarUrl = avatarUrl;
          this.tag('Info.Avatar').alpha = 0.001;
          this.tag('Info.Avatar').src = avatarUrl;
        }
        this.tag('Info.ChannelName').x = 60;
      } else {
        this._lastAvatarUrl = '';
        this.tag('Info.Avatar').alpha = 0;
        this.tag('Info.ChannelName').x = 0;
      }
      this.tag('Info.ChannelName').text.text = channel.ChannelName || '';
      if (isLive) {
        this.tag('Info.Headline').text.text = mainActive.Title || 'Transmisión en directo';
        this.tag('Info.Description').text.text = channel.ChannelDescription || 'Señal de streaming en vivo.';
      } else {
        this.tag('Info.Headline').text.text = channel.ChannelDescription || 'Explorá los programas y emisiones recientes de este canal.';
        this.tag('Info.Description').text.text = channel.ChannelCity ? "Canal de streaming desde ".concat(channel.ChannelCity, ".") : 'Seleccioná OK para ver su historial y grilla de transmisiones.';
      }
      let ctaText = '▶  OK para ver en vivo';
      if (actives.length > 1) {
        ctaText = "\u25B6  OK para elegir transmisi\xF3n (".concat(actives.length, ")");
      } else if (!isLive) {
        ctaText = '📅  OK para ver transmisiones del canal';
      }
      const ctaW = Math.max(290, ctaText.length * 11 + 36);
      this.tag('Info.CtaHint').patch({
        w: ctaW,
        Label: {
          text: {
            text: ctaText
          }
        }
      });

      // En la vista previa superior mostramos la foto de portada (Banner o última miniatura de transmisión;
      // en vivo mostramos la miniatura del stream activo)
      const bannerFormatted = channel.ChannelBannerUrl ? formatBannerUrl(channel.ChannelBannerUrl) : '';
      const isBannerPhoto = Boolean(!isLive && bannerFormatted);
      const rawBackdrop = isLive ? mainActive.ThumbnailUrl || bannerFormatted || channel.ChannelImgUrl || '' : bannerFormatted || channel.LatestPreviewThumb || channel.ChannelImgUrl || '';
      const nextSrc = rawBackdrop ? getOptimizedImageUrl(rawBackdrop, isBannerPhoto ? 640 : 480, isLive ? channel.LastActivityAt : '', 66) : '';
      if (this._backdropTimer) {
        clearTimeout(this._backdropTimer);
        this._backdropTimer = null;
      }
      if (!nextSrc) {
        this._currentBackdropSrc = '';
        this.tag('ArtworkWrap.Backdrop').alpha = 0;
        return;
      }
      if (this._currentBackdropSrc === nextSrc) return;

      // Debounce de 260ms: si el usuario se desplaza rápido con el control remoto, no decodifica imágenes intermedias
      this._backdropTimer = setTimeout(() => {
        this._currentBackdropSrc = nextSrc;
        const backdrop = this.tag('ArtworkWrap.Backdrop');
        if (isBannerPhoto) {
          backdrop.patch({
            x: 0,
            y: 15,
            w: 1080,
            h: 320
          });
        } else {
          backdrop.patch({
            x: 0,
            y: -45,
            w: 1080,
            h: 440
          });
        }
        backdrop.alpha = 0.001;
        backdrop.src = nextSrc;
      }, 260);
    }
  }

  class StatusDisplay extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 936,
        alpha: 0,
        Container: {
          mount: 0.5,
          x: 960,
          y: 440,
          AccentBar: {
            mount: 0.5,
            x: 0,
            y: -48,
            w: 64,
            h: 6,
            rect: true,
            color: COLORS.NETFLIX_RED
          },
          Message: {
            mountX: 0.5,
            x: 0,
            y: -16,
            text: {
              text: '',
              fontSize: 30,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_WHITE,
              textAlign: 'center'
            }
          },
          SubMessage: {
            mountX: 0.5,
            x: 0,
            y: 34,
            text: {
              text: '',
              fontSize: 20,
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_GRAY,
              textAlign: 'center'
            }
          }
        }
      };
    }
    _init() {
      this._pulseAnim = this.tag('Container.AccentBar').animation({
        duration: 1.1,
        repeat: -1,
        actions: [{
          p: 'w',
          v: {
            0: 48,
            0.5: 140,
            1: 48
          }
        }, {
          p: 'alpha',
          v: {
            0: 0.5,
            0.5: 1,
            1: 0.5
          }
        }]
      });
    }
    _detach() {
      if (this._pulseAnim) {
        this._pulseAnim.stop();
      }
    }
    set status(data) {
      const isFetching = data.isFetching,
        isLoading = data.isLoading,
        hasChannels = data.hasChannels,
        hasFilteredChannels = data.hasFilteredChannels,
        searchText = data.searchText,
        hasActiveFilters = data.hasActiveFilters;
      const loading = Boolean(isFetching || isLoading);
      if (loading) {
        this.alpha = 1;
        this.tag('Container.Message').text.text = 'Cargando programación en vivo...';
        this.tag('Container.SubMessage').text.text = 'Verificando señales activas y depurando transmisiones';
        if (this._pulseAnim && !this._pulseAnim.isPlaying()) {
          this._pulseAnim.start();
        }
      } else if (!hasChannels && (searchText || hasActiveFilters || !hasFilteredChannels)) {
        if (this._pulseAnim) this._pulseAnim.stop();
        this.tag('Container.AccentBar').w = 64;
        this.tag('Container.AccentBar').alpha = 1;
        this.alpha = 1;
        this.tag('Container.Message').text.text = 'No encontramos canales con esos filtros';
        this.tag('Container.SubMessage').text.text = 'Probá limpiar la búsqueda o cambiar la provincia seleccionada en el menú superior.';
      } else if (!hasChannels) {
        if (this._pulseAnim) this._pulseAnim.stop();
        this.alpha = 1;
        this.tag('Container.Message').text.text = 'No se pudieron obtener los canales';
        this.tag('Container.SubMessage').text.text = 'Seleccioná "Actualizar" en la barra superior para reintentar.';
      } else {
        if (this._pulseAnim) this._pulseAnim.stop();
        this.alpha = 0;
      }
    }
  }

  class InfoModal extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 1080,
        rect: true,
        color: 0xd908080a,
        alpha: 0,
        Content: {
          mount: 0.5,
          x: 960,
          y: 540,
          w: 1220,
          h: 780,
          rect: true,
          color: COLORS.BG_DARK,
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            radius: BORDER_RADIUS.LARGE,
            stroke: 2,
            strokeColor: COLORS.BORDER_LIGHT
          },
          TopAccent: {
            x: 0,
            y: 0,
            w: 1220,
            h: 6,
            rect: true,
            color: COLORS.NETFLIX_RED
          },
          // Vista 1: Acerca de Zapping Stream
          AboutView: {
            alpha: 1,
            Title: {
              x: 610,
              y: 48,
              mountX: 0.5,
              text: {
                text: '¿Qué es Zapping Stream?',
                fontSize: 42,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE
              }
            },
            Body: {
              x: 76,
              y: 132,
              text: {
                text: 'Zapping Stream reúne todos los canales de streaming de Argentina en un solo lugar. Nuestro objetivo es brindarle a la comunidad un punto de acceso y descubrimiento de canales y contenidos locales por fuera del algoritmo.\n\nPodés navegar las señales en vivo al instante o explorar la guía de transmisiones programadas por día, provincia y ciudad.',
                fontSize: 24,
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_LIGHT,
                wordWrapWidth: 1068,
                lineHeight: 36
              }
            },
            ContactBox: {
              x: 76,
              y: 366,
              w: 1068,
              h: 108,
              rect: true,
              color: COLORS.BG_PANEL,
              shader: {
                type: Lightning$1.shaders.RoundedRectangle,
                radius: BORDER_RADIUS.MEDIUM
              },
              ContactText: {
                mount: 0.5,
                x: 534,
                y: 54,
                text: {
                  text: '¿Querés sumar tu canal o solicitar la baja de contenido?\nEscribinos a: contacto@zappingstream.com',
                  fontSize: 23,
                  fontStyle: 'bold',
                  fontFace: TYPOGRAPHY.FONT_FAMILY,
                  textColor: COLORS.TEXT_WHITE,
                  wordWrapWidth: 1000,
                  lineHeight: 34,
                  textAlign: 'center'
                }
              }
            },
            Legal: {
              x: 76,
              y: 504,
              text: {
                text: 'Al utilizar esta aplicación aceptás los Términos de Servicio de YouTube y la Política de Privacidad de Google. Los logotipos, miniaturas, nombres y descripciones se obtienen de YouTube API Services.\n\nDirectorio independiente: no alojamos ni retransmitimos contenido propio. Todos los videos y marcas pertenecen a sus respectivos creadores.',
                fontSize: 19,
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_GRAY,
                wordWrapWidth: 1068,
                lineHeight: 28
              }
            }
          },
          // Vista 2: Ficha de Canal Individual (desde Guía de Transmisiones)
          ChannelView: {
            alpha: 0,
            Avatar: {
              x: 76,
              y: 62,
              w: 96,
              h: 96,
              alpha: 0,
              shader: {
                type: Lightning$1.shaders.RoundedRectangle,
                radius: 48
              }
            },
            Name: {
              x: 196,
              y: 64,
              text: {
                text: '',
                fontSize: 42,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE,
                maxLines: 1,
                wordWrapWidth: 940,
                textOverflow: 'ellipsis'
              }
            },
            Meta: {
              x: 196,
              y: 122,
              text: {
                text: '',
                fontSize: 22,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.NETFLIX_RED
              }
            },
            Description: {
              x: 76,
              y: 200,
              text: {
                text: '',
                fontSize: 24,
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_LIGHT,
                wordWrapWidth: 1068,
                maxLines: 10,
                lineHeight: 36,
                textOverflow: 'ellipsis'
              }
            }
          },
          // Botonera inferior
          Actions: {
            y: 676,
            PrimaryBtn: {
              alpha: 0,
              x: 370,
              w: 230,
              h: 56,
              rect: true,
              color: COLORS.NETFLIX_RED,
              shader: {
                type: Lightning$1.shaders.RoundedRectangle,
                radius: BORDER_RADIUS.MEDIUM
              },
              Label: {
                mount: 0.5,
                x: 115,
                y: 29,
                text: {
                  text: '▶  Ver canal',
                  fontSize: 22,
                  fontStyle: 'bold',
                  fontFace: TYPOGRAPHY.FONT_FAMILY,
                  textColor: COLORS.TEXT_WHITE
                }
              }
            },
            CloseBtn: {
              x: 495,
              w: 230,
              h: 56,
              rect: true,
              color: COLORS.FOCUS_WHITE,
              shader: {
                type: Lightning$1.shaders.RoundedRectangle,
                radius: BORDER_RADIUS.MEDIUM
              },
              Label: {
                mount: 0.5,
                x: 115,
                y: 29,
                text: {
                  text: 'Volver',
                  fontSize: 22,
                  fontStyle: 'bold',
                  fontFace: TYPOGRAPHY.FONT_FAMILY,
                  textColor: COLORS.BG_BLACK
                }
              }
            }
          }
        }
      };
    }
    _construct() {
      this._mode = 'about'; // 'about' | 'channel'
      this._btnIndex = 0; // 0 = PrimaryBtn (si channel), 1 = CloseBtn
      this._channel = null;
      this._onPlayChannel = null;
    }
    _init() {
      this.tag('Content.ChannelView.Avatar').on('txLoaded', () => {
        this.tag('Content.ChannelView.Avatar').alpha = 1;
      });
      this.tag('Content.ChannelView.Avatar').on('txError', () => {
        this.tag('Content.ChannelView.Avatar').alpha = 0;
      });
    }
    set onClose(callback) {
      this._onCloseCallback = callback;
    }
    set modalData(data) {
      if (!data || !data.channel) {
        this._mode = 'about';
        this._channel = null;
        this._onPlayChannel = null;
        this._btnIndex = 1;
        this.tag('Content.AboutView').alpha = 1;
        this.tag('Content.ChannelView').alpha = 0;
        this.tag('Content.Actions.PrimaryBtn').alpha = 0;
        this.tag('Content.Actions.CloseBtn').x = 495;
        this._updateButtonsVisual();
        return;
      }
      this._mode = 'channel';
      this._channel = data.channel;
      this._onPlayChannel = data.onPlayChannel;
      this._btnIndex = 0;
      const ch = data.channel;
      const activesCount = ch.Actives ? Object.keys(ch.Actives).length : 0;
      const upcomingCount = ch.Upcoming ? Object.keys(ch.Upcoming).length : 0;
      this.tag('Content.AboutView').alpha = 0;
      this.tag('Content.ChannelView').alpha = 1;
      const avatarSrc = ch.ChannelImgUrl ? getOptimizedImageUrl(ch.ChannelImgUrl, 160) : '';
      if (avatarSrc) {
        this.tag('Content.ChannelView.Avatar').alpha = 0.001;
        this.tag('Content.ChannelView.Avatar').src = avatarSrc;
        this.tag('Content.ChannelView.Name').x = 196;
        this.tag('Content.ChannelView.Meta').x = 196;
      } else {
        this.tag('Content.ChannelView.Avatar').alpha = 0;
        this.tag('Content.ChannelView.Name').x = 76;
        this.tag('Content.ChannelView.Meta').x = 76;
      }
      this.tag('Content.ChannelView.Name').text.text = ch.ChannelName || '';
      const metaParts = [];
      if (activesCount > 0) metaParts.push('● EN VIVO AHORA');else metaParts.push('ON DEMAND');
      if (ch.ChannelCity) {
        metaParts.push(data.provinceName && data.provinceName !== ch.ChannelCity ? "\uD83D\uDCCD ".concat(ch.ChannelCity, ", ").concat(data.provinceName) : "\uD83D\uDCCD ".concat(ch.ChannelCity));
      }
      if (upcomingCount > 0) metaParts.push("".concat(upcomingCount, " pr\xF3ximas en gu\xEDa"));
      this.tag('Content.ChannelView.Meta').text.text = metaParts.join('   •   ');
      this.tag('Content.ChannelView.Description').text.text = ch.ChannelDescription || 'Sin descripción disponible para este canal.';
      this.tag('Content.Actions.PrimaryBtn').patch({
        alpha: 1,
        x: 350,
        w: 250,
        Label: {
          x: 125,
          text: {
            text: activesCount > 0 ? '▶  Ver en vivo' : '📅  Transmisiones'
          }
        }
      });
      this.tag('Content.Actions.CloseBtn').x = 625;
      this._updateButtonsVisual();
    }
    _updateButtonsVisual() {
      const primaryFocused = this._mode === 'channel' && this._btnIndex === 0;
      const closeFocused = this._mode !== 'channel' || this._btnIndex === 1;
      this.tag('Content.Actions.PrimaryBtn').patch({
        color: primaryFocused ? COLORS.FOCUS_WHITE : COLORS.NETFLIX_RED,
        Label: {
          text: {
            textColor: primaryFocused ? COLORS.BG_BLACK : COLORS.TEXT_WHITE
          }
        }
      });
      this.tag('Content.Actions.CloseBtn').patch({
        color: closeFocused ? COLORS.FOCUS_WHITE : COLORS.BG_PANEL,
        Label: {
          text: {
            textColor: closeFocused ? COLORS.BG_BLACK : COLORS.TEXT_WHITE
          }
        }
      });
    }
    _handleLeft() {
      if (this._mode === 'channel' && this._btnIndex === 1) {
        this._btnIndex = 0;
        this._updateButtonsVisual();
      }
      return true;
    }
    _handleRight() {
      if (this._mode === 'channel' && this._btnIndex === 0) {
        this._btnIndex = 1;
        this._updateButtonsVisual();
      }
      return true;
    }
    _handleEnter() {
      if (this._mode === 'channel' && this._btnIndex === 0 && this._channel && this._onPlayChannel) {
        const targetChannel = this._channel;
        const playFn = this._onPlayChannel;
        if (this._onCloseCallback) this._onCloseCallback();
        playFn(targetChannel);
        return true;
      }
      if (this._onCloseCallback) this._onCloseCallback();
      return true;
    }
    _handleBack() {
      if (this._onCloseCallback) this._onCloseCallback();
      return true;
    }
    _focus() {
      this._updateButtonsVisual();
    }
    _getFocused() {
      return this;
    }
  }

  class TVPlayer extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 1080,
        rect: true,
        color: COLORS.TRANSPARENT,
        // Popup superior izquierdo: controles de reproducción y CC
        Controls: {
          x: 64,
          y: 48,
          alpha: 1,
          w: 840,
          h: 60,
          rect: true,
          color: 0xe8101014,
          RedAccent: {
            x: 0,
            y: 0,
            w: 6,
            h: 60,
            rect: true,
            color: COLORS.NETFLIX_RED
          },
          Text: {
            mountY: 0.5,
            x: 26,
            y: 31,
            text: {
              text: '↩ Volver   •   OK: Pausar   •   ◀ 15s ▶',
              fontSize: 21,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_WHITE
            }
          },
          CcPill: {
            mountX: 1,
            mountY: 0.5,
            x: 822,
            y: 30,
            w: 210,
            h: 40,
            rect: true,
            color: COLORS.BG_PANEL,
            Label: {
              mount: 0.5,
              x: 105,
              y: 21,
              text: {
                text: '▲▼ CC: OFF',
                fontSize: 19,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_GRAY
              }
            }
          }
        },
        // Popup superior derecho: estado de la transmisión (En vivo / Estreno / Emitido...)
        StatusPopup: {
          mountX: 1,
          x: 1856,
          y: 48,
          alpha: 1,
          w: 240,
          h: 60,
          rect: true,
          color: 0xe8101014,
          Label: {
            mount: 0.5,
            x: 117,
            y: 31,
            text: {
              text: '● En vivo',
              fontSize: 21,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_WHITE
            }
          },
          RightAccent: {
            x: 234,
            y: 0,
            w: 6,
            h: 60,
            rect: true,
            color: COLORS.NETFLIX_RED
          }
        }
      };
    }
    _init() {
      this._timer = null;
      this._isClosing = false;
      this._focusInterval = null;
      this._isPlaying = true;
      this._ccEnabled = false;
      this._loadedWithCcPolicy = false;
      this._hasStatusMeta = false;
    }
    _active() {
      this._isClosing = false;
      this._ccEnabled = false;
      this._loadedWithCcPolicy = false;
      this._createIframe(0);
      this._wakeUpControls();
    }
    _inactive() {
      this._destroyIframe();
      this._clearTimer();
      this._clearFocusLock();
    }
    set playbackMeta(meta) {
      this._updateStatusPopup(meta);
    }
    set videoId(id) {
      this._videoId = id;
      if (this.active) {
        this._destroyIframe();
        this._createIframe(0);
      }
    }
    set onClose(callback) {
      this._onCloseCallback = callback;
    }
    _updateStatusPopup(meta) {
      if (!meta) {
        this._hasStatusMeta = false;
        this.tag('StatusPopup').alpha = 0;
        return;
      }
      this._hasStatusMeta = true;
      const isLive = Boolean(meta.isLive);
      const isPremiere = Boolean(meta.isPremiere);
      const isPast = Boolean(meta.isPast);
      const refDateStr = meta.referenceDate || '';
      let labelText = '';
      let accentColor = COLORS.NETFLIX_RED;
      const today = new Date();
      const parsedDate = refDateStr ? new Date(refDateStr) : null;
      const hasValidDate = Boolean(parsedDate && !isNaN(parsedDate.getTime()));
      const formatShortDate = d => d.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      if (isLive) {
        if (isPremiere) {
          labelText = '★ Estreno';
          accentColor = COLORS.PREMIERE_BADGE;
        } else {
          labelText = '● En vivo';
          accentColor = COLORS.NETFLIX_RED;
        }
      } else if (isPast || hasValidDate && parsedDate.getTime() <= Date.now()) {
        accentColor = isPremiere ? COLORS.PREMIERE_BADGE : COLORS.BORDER_LIGHT;
        if (hasValidDate && isSameLocalDay(parsedDate, today)) {
          labelText = isPremiere ? 'Estrenado hoy' : 'Emitido hoy';
        } else if (hasValidDate) {
          const formatted = formatShortDate(parsedDate);
          labelText = isPremiere ? "Estrenado el ".concat(formatted) : "Emitido el ".concat(formatted);
        } else {
          labelText = isPremiere ? 'Estrenado' : 'Emitido';
        }
      } else {
        // Transmisión futura programada
        accentColor = isPremiere ? COLORS.PREMIERE_BADGE : COLORS.ACCENT_BLUE;
        if (hasValidDate && isSameLocalDay(parsedDate, today)) {
          labelText = isPremiere ? 'Estreno programado hoy' : 'Programado hoy';
        } else if (hasValidDate) {
          const formatted = formatShortDate(parsedDate);
          labelText = isPremiere ? "Estreno el ".concat(formatted) : "Programado el ".concat(formatted);
        } else {
          labelText = isPremiere ? 'Estreno programado' : 'Programado';
        }
      }
      const boxW = Math.max(190, Math.round(labelText.length * 12.2) + 56);
      this.tag('StatusPopup').patch({
        w: boxW,
        Label: {
          x: Math.round((boxW - 6) / 2),
          text: {
            text: labelText
          }
        },
        RightAccent: {
          x: boxW - 6,
          color: accentColor
        }
      });
    }
    _sendPlayerCommand(func) {
      let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (this._iframe && this._iframe.contentWindow) {
        this._iframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func,
          args
        }), '*');
      }
    }
    _applyCaptionsState() {
      if (!this._iframe || !this._iframe.contentWindow) return;
      if (this._ccEnabled) {
        this._sendPlayerCommand('loadModule', ['captions']);
        this._sendPlayerCommand('loadModule', ['cc']);
        this._sendPlayerCommand('setOption', ['captions', 'track', {
          languageCode: 'es'
        }]);
        this._sendPlayerCommand('setOption', ['cc', 'track', {
          languageCode: 'es'
        }]);
        this._sendPlayerCommand('setOption', ['captions', 'reload', true]);
      } else {
        this._sendPlayerCommand('setOption', ['captions', 'track', {}]);
        this._sendPlayerCommand('setOption', ['cc', 'track', {}]);
        this._sendPlayerCommand('unloadModule', ['captions']);
        this._sendPlayerCommand('unloadModule', ['cc']);
      }
    }
    _createIframe() {
      let resumeSeconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this._iframe || !this._videoId) return;
      this._currentTime = resumeSeconds > 0 ? resumeSeconds : 0;
      this._duration = 0;
      this._appliedInitialCc = false;
      this._messageListener = event => {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'onReady') {
            this._applyCaptionsState();
          } else if (data.event === 'infoDelivery' && data.info) {
            if (data.info.currentTime !== undefined) this._currentTime = data.info.currentTime;
            if (data.info.duration !== undefined) this._duration = data.info.duration;
            if (data.info.playerState === 1 && !this._appliedInitialCc) {
              this._appliedInitialCc = true;
              this._applyCaptionsState();
            }
          }
        } catch (err) {
          // Ignorar mensajes externos que no sean JSON
        }
      };
      window.addEventListener('message', this._messageListener);
      const isRemoteHttps = window.location && window.location.protocol === 'https:' && window.location.hostname !== 'localhost';
      const originParam = isRemoteHttps ? "&origin=".concat(encodeURIComponent(window.location.origin)) : '';
      const ccPolicy = this._ccEnabled ? 1 : 0;
      const ccLang = this._ccEnabled ? '&cc_lang_pref=es' : '';
      const startParam = resumeSeconds > 2 ? "&start=".concat(Math.floor(resumeSeconds)) : '';
      this._loadedWithCcPolicy = this._ccEnabled;
      this._iframe = document.createElement('iframe');
      this._iframe.className = 'tv-iframe';
      this._iframe.src = "https://www.youtube-nocookie.com/embed/".concat(this._videoId, "?autoplay=1&fs=1&modestbranding=1&rel=0&hl=es&cc_load_policy=").concat(ccPolicy).concat(ccLang).concat(startParam, "&enablejsapi=1").concat(originParam);
      this._iframe.frameBorder = '0';
      this._iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      this._iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      this._iframe.allowFullscreen = true;
      this._iframe.style.position = 'absolute';
      this._iframe.style.top = '0';
      this._iframe.style.left = '0';
      this._iframe.style.width = '100vw';
      this._iframe.style.height = '100vh';
      this._iframe.style.zIndex = '0';
      this._iframe.style.border = 'none';
      this._iframe.onload = () => {
        if (this._iframe && this._iframe.contentWindow) {
          this._iframe.contentWindow.postMessage(JSON.stringify({
            event: 'listening'
          }), '*');
          setTimeout(() => this._applyCaptionsState(), 600);
        }
      };
      document.body.appendChild(this._iframe);
      this._isPlaying = true;
      this._updateControlsText();
    }
    _destroyIframe() {
      if (this._messageListener) {
        window.removeEventListener('message', this._messageListener);
        this._messageListener = null;
      }
      if (this._iframe) {
        this._sendPlayerCommand('stopVideo', []);
        if (this._iframe.parentNode) {
          this._iframe.parentNode.removeChild(this._iframe);
        }
        this._iframe = null;
      }
      this._clearFocusLock();
    }
    _clearFocusLock() {
      if (this._focusInterval) {
        clearInterval(this._focusInterval);
        this._focusInterval = null;
      }
    }
    _wakeUpControls() {
      this.tag('Controls').alpha = 1;
      if (this._hasStatusMeta) {
        this.tag('StatusPopup').alpha = 1;
      }
      this._clearTimer();
      this._timer = setTimeout(() => {
        this.tag('Controls').alpha = 0;
        this.tag('StatusPopup').alpha = 0;
        this._timer = null;
      }, 4000);
    }
    _clearTimer() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
    _updateControlsText() {
      const textNode = this.tag('Controls.Text');
      if (this._isPlaying) {
        textNode.text.text = '↩ Volver   •   OK: Pausar   •   ◀ 15s ▶';
      } else {
        textNode.text.text = '⏸ PAUSADO   •   OK: Reproducir   •   ◀ 15s ▶';
      }
      this.tag('Controls.CcPill').patch({
        color: this._ccEnabled ? COLORS.FOCUS_WHITE : COLORS.BG_PANEL,
        Label: {
          text: {
            text: this._ccEnabled ? '▲▼ CC: ACTIVADO' : '▲▼ CC: OFF',
            textColor: this._ccEnabled ? COLORS.BG_BLACK : COLORS.TEXT_LIGHT
          }
        }
      });
    }
    _toggleCaptions() {
      this._ccEnabled = !this._ccEnabled;
      this._updateControlsText();
      this._wakeUpControls();
      if (!this._ccEnabled) {
        this._applyCaptionsState();
        return;
      }
      if (!this._loadedWithCcPolicy) {
        const resumeAt = this._duration > 0 && this._currentTime > 2 ? this._currentTime : 0;
        this._destroyIframe();
        this._createIframe(resumeAt);
      } else {
        this._applyCaptionsState();
      }
    }
    _handleBack() {
      if (this._isClosing) return true;
      this._isClosing = true;
      if (this._onCloseCallback) {
        this._onCloseCallback();
      }
      return true;
    }
    _handleEnter() {
      this._isPlaying = !this._isPlaying;
      this._sendPlayerCommand(this._isPlaying ? 'playVideo' : 'pauseVideo', []);
      this._updateControlsText();
      this._wakeUpControls();
      return true;
    }
    _handleUp() {
      this._toggleCaptions();
      return true;
    }
    _handleDown() {
      this._toggleCaptions();
      return true;
    }
    _handleLeft() {
      this._seek(-15);
      return true;
    }
    _handleRight() {
      this._seek(15);
      return true;
    }
    _seek(seconds) {
      if (this._iframe && this._iframe.contentWindow) {
        this._currentTime = Math.max(0, this._currentTime + seconds);
        if (this._duration > 0) {
          this._currentTime = Math.min(this._currentTime, this._duration);
        }
        this._sendPlayerCommand('seekTo', [this._currentTime, true]);
        this._wakeUpControls();
      }
    }
    _handleKey(e) {
      if (e && (e.keyCode === 460 || e.keyCode === 10221 || e.key === 'Caption' || e.key === 'Subtitle' || e.key === 'c' || e.key === 'C')) {
        this._toggleCaptions();
        return true;
      }
      this._wakeUpControls();
      return false;
    }
  }

  class VideoCard extends Lightning$1.Component {
    static _template() {
      return {
        w: 340,
        h: 191,
        rect: true,
        color: 0xff1e1e26,
        clipping: true,
        Fallback: {
          w: w => w,
          h: h => h,
          rect: true,
          color: 0xff22222c,
          Initials: {
            mount: 0.5,
            x: w => w / 2,
            y: h => h / 2,
            text: {
              text: '',
              fontSize: 40,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: 0x44ffffff
            }
          }
        },
        Image: {
          x: 0,
          y: 0,
          w: 340,
          h: 191,
          alpha: 0.001
        },
        BottomScrim: {
          x: 0,
          y: h => h - 48,
          w: w => w,
          h: 48,
          rect: true,
          colorTop: 0x00000000,
          colorBottom: 0xb0000000
        },
        // Badge sin shader RoundedRectangle para aliviar al máximo la GPU del televisor
        Badge: {
          mountX: 1,
          mountY: 1,
          x: w => w - 10,
          y: h => h - 10,
          h: 24,
          w: 90,
          rect: true,
          color: COLORS.LIVE_BADGE,
          alpha: 0,
          Dot: {
            w: 6,
            h: 6,
            x: 8,
            mountY: 0.5,
            y: 12,
            rect: true,
            color: COLORS.TEXT_WHITE,
            alpha: 0
          },
          Text: {
            x: 8,
            mountY: 0.5,
            y: 13,
            text: {
              text: '',
              fontSize: 13,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_WHITE
            }
          }
        }
      };
    }
    _init() {
      this.tag('Image').on('txLoaded', () => {
        this.tag('Image').alpha = 1;
        this.tag('Fallback').alpha = 0;
      });
      this.tag('Image').on('txError', () => {
        this._showFallbackOnly();
      });
    }
    _showFallbackOnly() {
      this.tag('Image').alpha = 0;
      this.tag('Fallback').alpha = 1;
      if (typeof this.onImageError === 'function') {
        this.onImageError();
      }
    }
    set item(data) {
      if (!data) return;
      const oldSrc = this._finalSrc;
      const isLogoMode = Boolean(data.isLogoMode);
      this._fallbackText = data.fallbackText || data.altText || '';
      this.onClick = data.onClick;
      this.onImageError = data.onImageError;
      const cardW = this.w || 340;
      const cardH = this.h || 191;

      // Ajustar geometría de la imagen: logo cuadrado centrado para On Demand vs 16:9 completo para Vivo/EPG
      if (isLogoMode) {
        const logoSize = 128;
        this.tag('Image').patch({
          mount: 0.5,
          x: Math.round(cardW / 2),
          y: Math.round(cardH / 2),
          w: logoSize,
          h: logoSize
        });
        this.tag('BottomScrim').alpha = 0;
      } else {
        this.tag('Image').patch({
          mount: 0,
          x: 0,
          y: 0,
          w: cardW,
          h: cardH
        });
        this.tag('BottomScrim').alpha = 1;
      }
      const initials = this._fallbackText ? this._fallbackText.trim().split(/\s+/).slice(0, 2).map(w => w.charAt(0).toUpperCase()).join('') : 'TV';
      this.tag('Fallback.Initials').text.text = initials;
      const targetImgWidth = isLogoMode ? 150 : 320;
      const nextSrc = data.imageUrl ? getOptimizedImageUrl(data.imageUrl, targetImgWidth, data.cacheKey, 65) : '';
      if (nextSrc) {
        if (oldSrc !== nextSrc || !this.tag('Image').src) {
          this._finalSrc = nextSrc;
          this.tag('Fallback').alpha = 1;
          this.tag('Image').alpha = 0.001;
          this.tag('Image').src = nextSrc;
        }
      } else {
        this._finalSrc = '';
        this._showFallbackOnly();
      }
      this._updateBadge(data);
    }
    _updateBadge(_ref) {
      let isLive = _ref.isLive,
        isPremiere = _ref.isPremiere,
        isPast = _ref.isPast,
        isUpcoming = _ref.isUpcoming;
      const badge = this.tag('Badge');
      const label = this.tag('Badge.Text');
      const dot = this.tag('Badge.Dot');
      let text = '';
      let hasDot = false;
      let bgColor = COLORS.LIVE_BADGE;
      let textColor = COLORS.TEXT_WHITE;
      if (isLive) {
        bgColor = isPremiere ? COLORS.PREMIERE_BADGE : COLORS.LIVE_BADGE;
        text = isPremiere ? 'ESTRENO' : 'EN VIVO';
        hasDot = true;
      } else if (isPast) {
        bgColor = 0xd918181c;
        textColor = COLORS.TEXT_LIGHT;
        text = isPremiere ? 'ESTRENADO' : 'EMITIDO';
      } else if (isUpcoming) {
        bgColor = 0xd9272730;
        textColor = COLORS.TEXT_WHITE;
        text = isPremiere ? 'ESTRENO PROG.' : 'PRÓXIMO';
      } else {
        badge.alpha = 0;
        return;
      }
      badge.alpha = 1;
      badge.color = bgColor;
      label.text.text = text;
      label.text.textColor = textColor;
      if (hasDot) {
        dot.alpha = 1;
        label.x = 19;
        badge.w = text.length * 8 + 28;
      } else {
        dot.alpha = 0;
        label.x = 9;
        badge.w = text.length * 8 + 18;
      }
    }
    _handleEnter() {
      if (this.onClick) {
        this.onClick(this);
      }
    }
  }

  const DAY_BTN_W = 188;
  const DAY_BTN_STEP = 202; // 188 + 14 gap
  const EVENT_W = 336;
  const EVENT_H = 254;
  const EVENT_STEP = 356; // 336 + 20 gap
  const ROW_STRIDE = 276; // 254 + 22 gap
  const SIDEBAR_W = 224;
  const BORDER$1 = 4;

  // ==========================================
  // 1. Píldora de Día (DayButton)
  // ==========================================
  class DayButton extends Lightning$1.Component {
    static _template() {
      return {
        w: DAY_BTN_W,
        h: 50,
        rect: true,
        color: COLORS.BG_PANEL,
        shader: {
          type: Lightning$1.shaders.RoundedRectangle,
          radius: BORDER_RADIUS.PILL
        },
        Label: {
          mount: 0.5,
          x: DAY_BTN_W / 2,
          y: 25,
          text: {
            text: '',
            fontSize: 20,
            fontFace: TYPOGRAPHY.FONT_FAMILY,
            textColor: COLORS.TEXT_LIGHT
          }
        },
        SelectedDot: {
          alpha: 0,
          mountX: 0.5,
          x: DAY_BTN_W / 2,
          y: 42,
          w: 28,
          h: 4,
          rect: true,
          color: COLORS.NETFLIX_RED
        }
      };
    }
    set item(data) {
      this._item = data;
      this.tag('Label').text.text = data.label;
      this._updateState();
    }
    set isSelected(val) {
      this._isSelected = Boolean(val);
      this._updateState();
    }
    _updateState() {
      const focused = this.hasFocus();
      if (focused) {
        this.patch({
          color: COLORS.FOCUS_WHITE,
          Label: {
            text: {
              textColor: COLORS.BG_BLACK,
              fontStyle: 'bold'
            }
          },
          SelectedDot: {
            alpha: this._isSelected ? 1 : 0
          }
        });
      } else if (this._isSelected) {
        this.patch({
          color: COLORS.NETFLIX_RED,
          Label: {
            text: {
              textColor: COLORS.TEXT_WHITE,
              fontStyle: 'bold'
            }
          },
          SelectedDot: {
            alpha: 0
          }
        });
      } else {
        this.patch({
          color: COLORS.BG_PANEL,
          Label: {
            text: {
              textColor: COLORS.TEXT_GRAY,
              fontStyle: 'normal'
            }
          },
          SelectedDot: {
            alpha: 0
          }
        });
      }
    }
    _focus() {
      this._updateState();
    }
    _unfocus() {
      this._updateState();
    }
    _handleEnter() {
      if (this._item) {
        this.fireAncestors('$onDaySelected', this._item.date);
      }
      return true;
    }
  }

  // ==========================================
  // 2. Tarjeta de Programa Individual (EpgEvent)
  // ==========================================
  class EpgEvent extends Lightning$1.Component {
    static _template() {
      return {
        w: EVENT_W,
        h: EVENT_H,
        CardBody: {
          w: EVENT_W,
          h: EVENT_H,
          rect: true,
          color: COLORS.BG_DARK,
          clipping: true,
          VideoWrapper: {
            x: 0,
            y: 0,
            w: EVENT_W,
            h: 189,
            type: VideoCard
          },
          TimeBadge: {
            x: 10,
            y: 10,
            h: 26,
            w: 92,
            rect: true,
            color: 0xd90a0a0c,
            zIndex: 2,
            Label: {
              x: 9,
              mountY: 0.5,
              y: 14,
              text: {
                text: '',
                fontSize: 15,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE
              }
            }
          },
          MetaArea: {
            x: 0,
            y: 189,
            w: EVENT_W,
            h: 65,
            rect: true,
            color: COLORS.BG_CARD,
            Title: {
              x: 12,
              y: 9,
              w: EVENT_W - 24,
              text: {
                text: '',
                fontSize: 18,
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_LIGHT,
                maxLines: 2,
                textOverflow: 'ellipsis',
                wordWrapWidth: EVENT_W - 24,
                lineHeight: 23
              }
            }
          }
        },
        FocusRing: {
          alpha: 0,
          Top: {
            x: -BORDER$1,
            y: -BORDER$1,
            w: EVENT_W + BORDER$1 * 2,
            h: BORDER$1,
            rect: true,
            color: COLORS.FOCUS_WHITE
          },
          Bottom: {
            x: -BORDER$1,
            y: EVENT_H,
            w: EVENT_W + BORDER$1 * 2,
            h: BORDER$1,
            rect: true,
            color: COLORS.FOCUS_WHITE
          },
          Left: {
            x: -BORDER$1,
            y: 0,
            w: BORDER$1,
            h: EVENT_H,
            rect: true,
            color: COLORS.FOCUS_WHITE
          },
          Right: {
            x: EVENT_W,
            y: 0,
            w: BORDER$1,
            h: EVENT_H,
            rect: true,
            color: COLORS.FOCUS_WHITE
          }
        }
      };
    }
    set item(data) {
      this._item = data;
      const ev = data.ev;
      const start = formatTimeOnly(ev.EffectiveStartTime || ev.ScheduledStartTime);
      let timeText = start;
      if (ev.IsPast && !ev.Live) {
        const endStr = ev.ActualEndTime || ev.EndedAt;
        if (endStr) {
          timeText = "".concat(start, " - ").concat(formatTimeOnly(endStr));
        }
      } else if (ev.Live) {
        timeText = "\u25CF ".concat(start);
      }
      const badgeW = Math.max(timeText.length * 9 + 20, 72);
      this.tag('CardBody.TimeBadge').patch({
        w: badgeW,
        color: ev.Live ? COLORS.NETFLIX_RED : 0xd90a0a0c,
        Label: {
          text: {
            text: timeText,
            textColor: COLORS.TEXT_WHITE
          }
        }
      });
      const hasStreamThumb = Boolean(ev.ThumbnailUrl);
      const rawImageUrl = ev.ThumbnailUrl || ev.channel.ChannelImgUrl || '';
      this.tag('CardBody.VideoWrapper').item = {
        imageUrl: rawImageUrl,
        isLogoMode: !hasStreamThumb,
        cacheKey: ev.Live ? ev.channel.LastActivityAt : '',
        altText: ev.Title,
        fallbackText: ev.channel.ChannelName,
        isLive: Boolean(ev.Live),
        isPremiere: Boolean(ev.IsPremiere || ev.WasPremiere),
        isPast: Boolean(ev.IsPast && !ev.Live),
        isUpcoming: Boolean(!ev.IsPast && !ev.Live)
      };
      this.tag('CardBody.MetaArea.Title').text.text = ev.Title || 'Transmisión programada';
    }
    _focus() {
      this.patch({
        zIndex: 10,
        FocusRing: {
          alpha: 1
        },
        CardBody: {
          MetaArea: {
            color: COLORS.BG_ELEVATED,
            Title: {
              text: {
                textColor: COLORS.TEXT_WHITE
              }
            }
          }
        }
      });
    }
    _unfocus() {
      this.patch({
        zIndex: 1,
        FocusRing: {
          alpha: 0
        },
        CardBody: {
          MetaArea: {
            color: COLORS.BG_CARD,
            Title: {
              text: {
                textColor: COLORS.TEXT_LIGHT
              }
            }
          }
        }
      });
    }
    _handleEnter() {
      if (this._item && this._item.navigateYouTube && this._item.ev) {
        this._item.navigateYouTube("https://www.youtube.com/watch?v=".concat(this._item.ev.VideoId), this._item.ev);
      }
      return true;
    }
  }

  // ==========================================
  // 3. Fila de Canal Completa (EpgRow)
  // ==========================================
  class EpgRow extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: EVENT_H,
        Sidebar: {
          x: SPACING.SAFE_X,
          y: 0,
          w: SIDEBAR_W,
          h: EVENT_H,
          Card: {
            w: SIDEBAR_W,
            h: EVENT_H,
            rect: true,
            color: COLORS.BG_DARK,
            Logo: {
              x: 80,
              y: 22,
              w: 64,
              h: 64,
              alpha: 0
            },
            LiveDot: {
              alpha: 0,
              x: 134,
              y: 74,
              w: 12,
              h: 12,
              rect: true,
              color: COLORS.NETFLIX_RED
            },
            Name: {
              x: 14,
              y: 100,
              w: 196,
              text: {
                text: '',
                fontSize: 20,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE,
                wordWrapWidth: 196,
                maxLines: 2,
                textAlign: 'center',
                lineHeight: 26,
                textOverflow: 'ellipsis'
              }
            },
            InfoPill: {
              x: 24,
              y: 194,
              w: 176,
              h: 38,
              rect: true,
              color: COLORS.BG_PANEL,
              Label: {
                mount: 0.5,
                x: 88,
                y: 20,
                text: {
                  text: 'Info canal',
                  fontSize: 16,
                  fontStyle: 'bold',
                  fontFace: TYPOGRAPHY.FONT_FAMILY,
                  textColor: COLORS.TEXT_GRAY
                }
              }
            }
          },
          SidebarFocusRing: {
            alpha: 0,
            Top: {
              x: -BORDER$1,
              y: -BORDER$1,
              w: SIDEBAR_W + BORDER$1 * 2,
              h: BORDER$1,
              rect: true,
              color: COLORS.FOCUS_WHITE
            },
            Bottom: {
              x: -BORDER$1,
              y: EVENT_H,
              w: SIDEBAR_W + BORDER$1 * 2,
              h: BORDER$1,
              rect: true,
              color: COLORS.FOCUS_WHITE
            },
            Left: {
              x: -BORDER$1,
              y: 0,
              w: BORDER$1,
              h: EVENT_H,
              rect: true,
              color: COLORS.FOCUS_WHITE
            },
            Right: {
              x: SIDEBAR_W,
              y: 0,
              w: BORDER$1,
              h: EVENT_H,
              rect: true,
              color: COLORS.FOCUS_WHITE
            }
          }
        },
        TrackBounds: {
          x: 308,
          y: -8,
          w: 1920 - 308 - SPACING.SAFE_X,
          h: EVENT_H + 16,
          clipping: true,
          Slider: {
            x: 8,
            y: 8,
            Items: {}
          }
        }
      };
    }
    _construct() {
      this._index = 1; // 0 = Sidebar del canal, 1..N = Eventos
      this._poolSize = 10;
      this._eventsPool = null;
    }
    _init() {
      this.tag('Sidebar.Card.Logo').on('txLoaded', () => {
        this.tag('Sidebar.Card.Logo').alpha = 1;
      });
      this.tag('Sidebar.Card.Logo').on('txError', () => {
        this.tag('Sidebar.Card.Logo').alpha = 0;
      });
    }
    _createPool() {
      if (!this._eventsPool) {
        const items = [];
        for (let i = 0; i < this._poolSize; i++) {
          items.push({
            type: EpgEvent,
            alpha: 0,
            x: -9999
          });
        }
        this.tag('TrackBounds.Slider.Items').children = items;
        this._eventsPool = this.tag('TrackBounds.Slider.Items').children;
      }
    }
    set item(data) {
      const isSameChannel = this._item && this._item.row.channel.ChannelName === data.row.channel.ChannelName;
      this._item = data;
      const row = data.row,
        toggleInfo = data.toggleInfo;
      const logoSrc = row.channel.ChannelImgUrl ? getOptimizedImageUrl(row.channel.ChannelImgUrl, 84, '', 65) : '';
      if (logoSrc) {
        if (this._lastLogoSrc !== logoSrc) {
          this._lastLogoSrc = logoSrc;
          this.tag('Sidebar.Card.Logo').alpha = 0.001;
          this.tag('Sidebar.Card.Logo').src = logoSrc;
        }
      } else {
        this._lastLogoSrc = '';
        this.tag('Sidebar.Card.Logo').alpha = 0;
      }
      const hasLive = Boolean(row.events && row.events.some(e => e.Live));
      this.tag('Sidebar.Card.LiveDot').alpha = hasLive ? 1 : 0;
      this.tag('Sidebar.Card.Name').text.text = row.channel.ChannelName || '';
      this._toggleInfo = () => {
        if (toggleInfo) toggleInfo(row.channel);
      };
      this._eventsData = row.events || [];
      this._createPool();
      const liveIndex = this._eventsData.findIndex(e => e.Live);
      const defaultIndex = liveIndex !== -1 ? liveIndex + 1 : 1;
      if (isSameChannel) {
        if (this._index > this._eventsData.length) {
          this._index = Math.max(1, this._eventsData.length);
        }
      } else {
        this._index = defaultIndex;
      }
      this._eventsPool.forEach(ev => {
        ev._currentDataIdx = -1;
        ev.alpha = 0;
        ev.x = -9999;
      });
      this._updateSidebarFocusVisual();
      this._updateScroll();
    }
    _updateSidebarFocusVisual() {
      const sidebarActive = this.hasFocus() && this._index === 0;
      this.tag('Sidebar.SidebarFocusRing').alpha = sidebarActive ? 1 : 0;
      this.tag('Sidebar.Card.InfoPill').color = sidebarActive ? COLORS.FOCUS_WHITE : COLORS.BG_PANEL;
      this.tag('Sidebar.Card.InfoPill.Label').text.textColor = sidebarActive ? COLORS.BG_BLACK : COLORS.TEXT_GRAY;
    }
    _focus() {
      this._updateSidebarFocusVisual();
    }
    _unfocus() {
      this._updateSidebarFocusVisual();
    }
    _handleLeft() {
      if (this._index > 0) {
        this._index--;
        this._updateSidebarFocusVisual();
        this._updateScroll();
        this._refocus();
        return true;
      }
      return false;
    }
    _handleRight() {
      if (this._eventsData && this._index < this._eventsData.length) {
        this._index++;
        this._updateSidebarFocusVisual();
        this._updateScroll();
        this._refocus();
        return true;
      }
      return false;
    }
    _updateScroll() {
      if (!this._eventsData || this._eventsData.length === 0) return;
      const evIndex = Math.max(0, this._index - 1);
      const trackW = 1920 - 308 - SPACING.SAFE_X;
      const totalW = this._eventsData.length * EVENT_STEP - 20;
      let targetX = 8;
      if (this._index > 0 && totalW > trackW) {
        const rawX = -(evIndex * EVENT_STEP) + 8;
        const minX = trackW - totalW - 8;
        targetX = Math.max(minX, Math.min(8, rawX));
      }
      this.tag('TrackBounds.Slider').x = targetX;
      const leftVisibleCoord = Math.max(0, -targetX);
      const rightVisibleCoord = leftVisibleCoord + trackW;
      const startIdx = Math.max(0, Math.floor(leftVisibleCoord / EVENT_STEP) - 1);
      const endIdx = Math.min(this._eventsData.length - 1, Math.ceil(rightVisibleCoord / EVENT_STEP) + 1);
      this._eventsPool.forEach(ev => {
        if (ev._currentDataIdx !== -1 && (ev._currentDataIdx < startIdx || ev._currentDataIdx > endIdx)) {
          ev.alpha = 0;
          ev._currentDataIdx = -1;
          ev.x = -9999;
        }
      });
      for (let i = startIdx; i <= endIdx; i++) {
        const data = this._eventsData[i];
        const poolIndex = i % this._poolSize;
        const evComponent = this._eventsPool[poolIndex];
        if (evComponent._currentDataIdx !== i) {
          evComponent.patch({
            x: i * EVENT_STEP,
            alpha: 1,
            item: {
              ev: data,
              navigateYouTube: this._item.navigateYouTube
            }
          });
          evComponent._currentDataIdx = i;
        }
      }
    }
    _getFocused() {
      if (this._index === 0) return this;
      if (!this._eventsData || this._eventsData.length === 0) return this;
      const evIndex = this._index - 1;
      const poolIndex = evIndex % this._poolSize;
      return this._eventsPool[poolIndex];
    }
    _handleEnter() {
      if (this._index === 0 && this._toggleInfo) {
        this._toggleInfo();
        return true;
      }
      return false;
    }
  }

  // ==========================================
  // 4. Guía Principal de Transmisiones (ScheduleGrid)
  // ==========================================
  class ScheduleGrid extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 936,
        alpha: 1,
        DaysRailBounds: {
          x: SPACING.SAFE_X,
          y: 14,
          w: 1920 - SPACING.SAFE_X * 2,
          h: 62,
          clipping: true,
          Slider: {
            x: 0,
            y: 6,
            Items: {}
          }
        },
        StateMsg: {
          alpha: 0,
          mount: 0.5,
          x: 960,
          y: 460,
          text: {
            text: 'No hay transmisiones programadas para este día.',
            fontSize: 30,
            fontFace: TYPOGRAPHY.FONT_FAMILY,
            textColor: COLORS.TEXT_GRAY
          }
        },
        EpgContainerBounds: {
          x: 0,
          y: 88,
          w: 1920,
          h: 840,
          clipping: true,
          Slider: {
            x: 0,
            y: 4,
            Items: {}
          }
        }
      };
    }
    _construct() {
      this._focusY = 0;
      this._dayIndex = 7;
      this._rowsComponents = null;
      this._rowsData = [];
      this._validationSeq = 0;
      this._isValidatingDay = false;
      this._today = new Date();
      this._today.setHours(0, 0, 0, 0);
      this._selectedDate = new Date(this._today);
      this._days = [];
      for (let i = -7; i <= 7; i++) {
        const d = new Date(this._today);
        d.setDate(this._today.getDate() + i);
        d.setHours(0, 0, 0, 0);
        this._days.push(d);
        if (d.getTime() === this._today.getTime()) {
          this._dayIndex = i + 7;
        }
      }
    }
    _init() {
      const daysItems = this._days.map((d, i) => {
        let label = d.toLocaleDateString('es-AR', {
          weekday: 'short',
          day: 'numeric',
          month: 'numeric'
        });
        if (d.getTime() === this._today.getTime()) {
          label = 'Hoy';
        }
        return {
          type: DayButton,
          x: i * DAY_BTN_STEP,
          item: {
            date: d,
            label
          }
        };
      });
      this.tag('DaysRailBounds.Slider.Items').children = daysItems;
      this._dayButtons = this.tag('DaysRailBounds.Slider.Items').children;
      this._centerDaySlider();
    }
    _centerDaySlider() {
      const railW = 1920 - SPACING.SAFE_X * 2;
      const totalW = this._days.length * DAY_BTN_STEP - 14;
      const centerOffset = Math.round((railW - DAY_BTN_W) / 2);
      const rawX = -(this._dayIndex * DAY_BTN_STEP) + centerOffset;
      const minX = railW - totalW;
      const targetX = Math.max(minX, Math.min(0, rawX));
      this.tag('DaysRailBounds.Slider').x = targetX;
    }
    _channelHasEventsOnDate(channel, dateObj) {
      const buckets = [channel.Actives, channel.Upcoming, channel.Past];
      for (let b = 0; b < buckets.length; b++) {
        const bucket = buckets[b];
        if (!bucket) continue;
        const vals = Object.values(bucket);
        for (let i = 0; i < vals.length; i++) {
          const v = vals[i];
          if (!v || !v.VideoId) continue;
          const ds = v.EffectiveStartTime || v.ActualStartTime || v.ScheduledStartTime || v.AddedAt;
          if (!ds) continue;
          const parsed = new Date(ds);
          if (!isNaN(parsed.getTime()) && isSameLocalDay(parsed, dateObj)) {
            return true;
          }
        }
      }
      return false;
    }
    _pickBestDayForChannels(channels) {
      if (!channels || channels.length === 0) return null;
      const hasOnDay = dateObj => channels.some(ch => this._channelHasEventsOnDate(ch, dateObj));
      if (hasOnDay(this._today)) {
        return {
          date: new Date(this._today),
          dayIdx: 7
        };
      }
      for (let idx = 6; idx >= 0; idx--) {
        if (hasOnDay(this._days[idx])) {
          return {
            date: new Date(this._days[idx]),
            dayIdx: idx
          };
        }
      }
      for (let idx = 8; idx < this._days.length; idx++) {
        if (hasOnDay(this._days[idx])) {
          return {
            date: new Date(this._days[idx]),
            dayIdx: idx
          };
        }
      }
      return {
        date: new Date(this._today),
        dayIdx: 7
      };
    }
    set config(data) {
      this._channels = data.channels || [];
      this._navigateYouTube = data.navigateYouTube;
      this._toggleInfo = data.toggleInfo;
      this._abrirCanal = data.abrirCanal;
      this._abrirCanalOnStreams = data.abrirCanalOnStreams;
      this._abrirCanalOnDemand = data.abrirCanalOnDemand;
      if (data.autoFocusBestDay) {
        const best = this._pickBestDayForChannels(this._channels);
        if (best) {
          this._selectedDate = best.date;
          this._dayIndex = best.dayIdx;
          this._centerDaySlider();
        }
        this._pendingAutoFocusRow = true;
      }
      this._prepareAndBuildSelectedDay();
    }
    async _prepareAndBuildSelectedDay() {
      const seq = ++this._validationSeq;
      const targetDate = this._selectedDate;
      if (this._dayButtons) {
        this._dayButtons.forEach((btn, idx) => {
          btn.isSelected = this._days[idx].getTime() === targetDate.getTime();
        });
      }
      if (!isDatePrevalidated(targetDate) && this._channels && this._channels.length > 0) {
        this._isValidatingDay = true;
        this.tag('EpgContainerBounds').alpha = 0;
        this.tag('StateMsg').patch({
          alpha: 1,
          text: {
            text: 'Verificando transmisiones disponibles...'
          }
        });
        const _await$ensureDateChan = await ensureDateChannelsValidated(this._channels, targetDate),
          cleaned = _await$ensureDateChan.channels,
          removedCount = _await$ensureDateChan.removedCount;
        if (seq !== this._validationSeq) return;
        this._isValidatingDay = false;
        this._channels = cleaned;
        if (removedCount > 0) {
          this.fireAncestors('$onChannelsSanitized');
        }
      }
      if (seq !== this._validationSeq) return;
      this._isValidatingDay = false;
      this._buildGrid();
    }
    _buildGrid() {
      const rowsData = [];
      const selectedDate = this._selectedDate;
      this._channels.forEach(channel => {
        const events = [];
        const seenIds = new Set();
        const tryPush = (v, isLive, isPast) => {
          if (!v || !v.VideoId || seenIds.has(v.VideoId)) return;
          const effectiveStart = v.EffectiveStartTime || v.ActualStartTime || v.ScheduledStartTime || v.AddedAt;
          if (!effectiveStart) return;
          const vDate = new Date(effectiveStart);
          if (isNaN(vDate.getTime()) || !isSameLocalDay(vDate, selectedDate)) return;
          seenIds.add(v.VideoId);
          events.push({
            ...v,
            EffectiveStartTime: effectiveStart,
            ScheduledStartTime: effectiveStart,
            Live: isLive,
            IsPast: isPast,
            channel
          });
        };
        if (channel.Actives) {
          Object.values(channel.Actives).forEach(v => tryPush(v, true, false));
        }
        if (channel.Upcoming) {
          Object.values(channel.Upcoming).forEach(v => tryPush(v, Boolean(v.Live), false));
        }
        if (channel.Past) {
          Object.values(channel.Past).forEach(v => tryPush(v, false, true));
        }
        if (events.length > 0) {
          events.sort((a, b) => {
            const ta = new Date(a.EffectiveStartTime).getTime() || 0;
            const tb = new Date(b.EffectiveStartTime).getTime() || 0;
            return ta - tb;
          });
          rowsData.push({
            channel,
            events
          });
        }
      });
      rowsData.sort((a, b) => a.channel.ChannelName.localeCompare(b.channel.ChannelName));
      this._rowsData = rowsData;
      if (rowsData.length === 0) {
        this.tag('EpgContainerBounds').alpha = 0;
        this.tag('StateMsg').patch({
          alpha: 1,
          text: {
            text: 'No hay transmisiones programadas para este día.'
          }
        });
      } else {
        this.tag('StateMsg').alpha = 0;
        this.tag('EpgContainerBounds').alpha = 1;
      }
      if (!this._rowsComponents) {
        this._poolSize = 6;
        const rowItems = [];
        for (let i = 0; i < this._poolSize; i++) {
          rowItems.push({
            type: EpgRow,
            alpha: 0,
            y: -9999
          });
        }
        this.tag('EpgContainerBounds.Slider.Items').children = rowItems;
        this._rowsComponents = this.tag('EpgContainerBounds.Slider.Items').children;
      }
      this._rowsComponents.forEach(row => {
        row._currentDataIdx = -1;
        row.alpha = 0;
        row.y = -9999;
      });
      if (this._pendingAutoFocusRow) {
        this._pendingAutoFocusRow = false;
        this._focusY = this._rowsData.length > 0 ? 1 : 0;
      } else if (this._focusY > this._rowsData.length) {
        this._focusY = this._rowsData.length;
      }
      this._updateScrollVertical();
      if (this.hasFocus()) {
        this._refocus();
      }
    }
    $onDaySelected(date) {
      this._selectedDate = date;
      this._focusY = 0;
      this._prepareAndBuildSelectedDay();
    }
    _handleUp() {
      if (this._focusY > 0) {
        this._focusY--;
        this._updateScrollVertical();
        this._refocus();
        return true;
      }
      return false;
    }
    _handleDown() {
      if (this._isValidatingDay) return true;
      if (this._rowsData && this._focusY < this._rowsData.length) {
        this._focusY++;
        this._updateScrollVertical();
        this._refocus();
        return true;
      }
      return true;
    }
    _handleLeft() {
      if (this._focusY === 0 && this._dayIndex > 0) {
        this._dayIndex--;
        this._centerDaySlider();
        this._refocus();
        return true;
      }
      return false;
    }
    _handleRight() {
      if (this._focusY === 0 && this._dayButtons && this._dayIndex < this._dayButtons.length - 1) {
        this._dayIndex++;
        this._centerDaySlider();
        this._refocus();
        return true;
      }
      return false;
    }
    _updateScrollVertical() {
      const rowIndex = Math.max(0, this._focusY - 1);
      const viewportH = 840;
      const totalH = this._rowsData.length * ROW_STRIDE - 22;
      let targetY = 4;
      if (this._focusY > 0 && totalH > viewportH) {
        const rawY = -(rowIndex * ROW_STRIDE) + 4;
        const minY = viewportH - totalH - 12;
        targetY = Math.max(minY, Math.min(4, rawY));
      }
      this.tag('EpgContainerBounds.Slider').y = targetY;
      if (!this._rowsData || this._rowsData.length === 0) return;
      const topVisibleCoord = Math.max(0, -targetY);
      const bottomVisibleCoord = topVisibleCoord + viewportH;
      const startIdx = Math.max(0, Math.floor(topVisibleCoord / ROW_STRIDE) - 1);
      const endIdx = Math.min(this._rowsData.length - 1, Math.ceil(bottomVisibleCoord / ROW_STRIDE) + 1);
      this._rowsComponents.forEach(row => {
        if (row._currentDataIdx !== -1 && (row._currentDataIdx < startIdx || row._currentDataIdx > endIdx)) {
          row.alpha = 0;
          row._currentDataIdx = -1;
          row.y = -9999;
        }
      });
      for (let i = startIdx; i <= endIdx; i++) {
        const data = this._rowsData[i];
        const poolIndex = i % this._poolSize;
        const row = this._rowsComponents[poolIndex];
        if (row._currentDataIdx !== i) {
          row.patch({
            y: i * ROW_STRIDE,
            alpha: 1,
            item: {
              row: data,
              navigateYouTube: this._navigateYouTube,
              toggleInfo: this._toggleInfo
            }
          });
          row._currentDataIdx = i;
        }
      }
    }
    _getFocused() {
      if (this._focusY === 0 || this._isValidatingDay) {
        return this._dayButtons && this._dayButtons[this._dayIndex] || this;
      }
      if (this._rowsData && this._rowsData.length > 0) {
        const dataIdx = this._focusY - 1;
        const poolIndex = dataIdx % this._poolSize;
        return this._rowsComponents[poolIndex];
      }
      return this;
    }
  }

  const W = COMPONENT_SIZE.CARD_WIDTH;
  const H = COMPONENT_SIZE.CARD_HEIGHT;
  const BORDER = 4;
  class ChannelCard extends Lightning$1.Component {
    static _template() {
      return {
        w: W,
        h: H,
        Body: {
          w: W,
          h: H,
          rect: true,
          color: COLORS.BG_DARK,
          clipping: true,
          Thumb: {
            x: 0,
            y: 0,
            w: W,
            h: 191,
            type: VideoCard
          },
          MultiStreamBadge: {
            alpha: 0,
            x: 10,
            y: 10,
            h: 24,
            w: 108,
            rect: true,
            color: 0xd90a0a0c,
            Label: {
              mount: 0.5,
              x: 54,
              y: 13,
              text: {
                text: '',
                fontSize: 13,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE
              }
            }
          },
          MetaStrip: {
            x: 0,
            y: 191,
            w: W,
            h: 57,
            rect: true,
            color: COLORS.BG_CARD,
            Logo: {
              x: 12,
              y: 13,
              w: 31,
              h: 31,
              alpha: 0
            },
            ChannelTitle: {
              x: 52,
              y: 7,
              text: {
                text: '',
                fontSize: 19,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE,
                maxLines: 1,
                wordWrapWidth: 276,
                textOverflow: 'ellipsis'
              }
            },
            Subtitle: {
              x: 52,
              y: 31,
              text: {
                text: '',
                fontSize: 16,
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_GRAY,
                maxLines: 1,
                wordWrapWidth: 276,
                textOverflow: 'ellipsis'
              }
            }
          }
        },
        // Marco de foco con 4 rectángulos nativos (cero costo de fragment shaders en Smart TV)
        FocusRing: {
          alpha: 0,
          Top: {
            x: -BORDER,
            y: -BORDER,
            w: W + BORDER * 2,
            h: BORDER,
            rect: true,
            color: COLORS.FOCUS_WHITE
          },
          Bottom: {
            x: -BORDER,
            y: H,
            w: W + BORDER * 2,
            h: BORDER,
            rect: true,
            color: COLORS.FOCUS_WHITE
          },
          Left: {
            x: -BORDER,
            y: 0,
            w: BORDER,
            h: H,
            rect: true,
            color: COLORS.FOCUS_WHITE
          },
          Right: {
            x: W,
            y: 0,
            w: BORDER,
            h: H,
            rect: true,
            color: COLORS.FOCUS_WHITE
          }
        }
      };
    }
    _init() {
      this.tag('Body.MetaStrip.Logo').on('txLoaded', () => {
        this.tag('Body.MetaStrip.Logo').alpha = 1;
      });
      this.tag('Body.MetaStrip.Logo').on('txError', () => {
        this.tag('Body.MetaStrip.Logo').alpha = 0;
      });
    }
    set item(data) {
      this._item = data;
      this._updateLayout();
    }
    get item() {
      return this._item;
    }
    _updateLayout() {
      if (!this._item || !this._item.channel) return;
      const _this$_item = this._item,
        channel = _this$_item.channel,
        isLiveGroup = _this$_item.isLiveGroup;
      const activeVideos = isLiveGroup ? channel.ActiveList || Object.values(channel.Actives || {}) : [];
      this._activeVideos = activeVideos;
      const mainActive = activeVideos.length > 0 ? activeVideos[0] : null;
      const isLiveCard = Boolean(isLiveGroup && mainActive);

      // En Vivo: miniatura 16:9 de la transmisión. On Demand: SIEMPRE el logo del canal centrado.
      const rawThumb = isLiveCard ? mainActive.ThumbnailUrl || channel.ChannelImgUrl || '' : channel.ChannelImgUrl || '';
      this.tag('Body.Thumb').item = {
        imageUrl: rawThumb,
        isLogoMode: !isLiveCard,
        cacheKey: isLiveCard ? channel.LastActivityAt : '',
        altText: mainActive ? mainActive.Title : channel.ChannelName,
        fallbackText: channel.ChannelName,
        isLive: Boolean(isLiveCard && mainActive.Live !== false),
        isPremiere: Boolean(mainActive && mainActive.IsPremiere)
      };
      if (isLiveCard && activeVideos.length > 1) {
        const text = "".concat(activeVideos.length, " EN VIVO");
        const w = text.length * 8 + 22;
        this.tag('Body.MultiStreamBadge').patch({
          alpha: 1,
          w,
          Label: {
            x: w / 2,
            text: {
              text
            }
          }
        });
      } else {
        this.tag('Body.MultiStreamBadge').alpha = 0;
      }

      // Solo cargamos el mini-avatar inferior en las tarjetas En Vivo (en On Demand ya se ve grande arriba)
      const showMiniLogo = Boolean(isLiveCard && channel.ChannelImgUrl);
      if (showMiniLogo) {
        const logoUrl = getOptimizedImageUrl(channel.ChannelImgUrl, 56, '', 65);
        if (this._lastLogoUrl !== logoUrl) {
          this._lastLogoUrl = logoUrl;
          this.tag('Body.MetaStrip.Logo').alpha = 0.001;
          this.tag('Body.MetaStrip.Logo').src = logoUrl;
        }
        this.tag('Body.MetaStrip.ChannelTitle').x = 52;
        this.tag('Body.MetaStrip.Subtitle').x = 52;
        this.tag('Body.MetaStrip.ChannelTitle').text.wordWrapWidth = 276;
        this.tag('Body.MetaStrip.Subtitle').text.wordWrapWidth = 276;
      } else {
        this._lastLogoUrl = '';
        this.tag('Body.MetaStrip.Logo').alpha = 0;
        this.tag('Body.MetaStrip.ChannelTitle').x = 14;
        this.tag('Body.MetaStrip.Subtitle').x = 14;
        this.tag('Body.MetaStrip.ChannelTitle').text.wordWrapWidth = 312;
        this.tag('Body.MetaStrip.Subtitle').text.wordWrapWidth = 312;
      }
      this.tag('Body.MetaStrip.ChannelTitle').text.text = channel.ChannelName || '';
      if (isLiveCard) {
        this.tag('Body.MetaStrip.Subtitle').text.text = mainActive.Title || 'En vivo ahora';
      } else {
        this.tag('Body.MetaStrip.Subtitle').text.text = channel.ChannelCity ? "\uD83D\uDCCD ".concat(channel.ChannelCity) : 'Ver transmisiones';
      }
    }
    _focus() {
      this.patch({
        zIndex: 10,
        FocusRing: {
          alpha: 1
        },
        Body: {
          MetaStrip: {
            color: COLORS.BG_ELEVATED,
            Subtitle: {
              text: {
                textColor: COLORS.TEXT_LIGHT
              }
            }
          }
        }
      });
      if (this._item && this._item.channel) {
        this.fireAncestors('$onChannelFocused', this._item.channel);
      }
    }
    _unfocus() {
      this.patch({
        zIndex: 1,
        FocusRing: {
          alpha: 0
        },
        Body: {
          MetaStrip: {
            color: COLORS.BG_CARD,
            Subtitle: {
              text: {
                textColor: COLORS.TEXT_GRAY
              }
            }
          }
        }
      });
    }
    _handleEnter() {
      if (!this._item) return true;
      const _this$_item2 = this._item,
        channel = _this$_item2.channel,
        isLiveGroup = _this$_item2.isLiveGroup,
        abrirCanal = _this$_item2.abrirCanal,
        abrirCanalOnStreams = _this$_item2.abrirCanalOnStreams;
      if (isLiveGroup) {
        if (this._activeVideos && this._activeVideos.length > 1) {
          this.fireAncestors('$onSelectStream', {
            channel,
            activeVideos: this._activeVideos
          });
        } else if (abrirCanal) {
          abrirCanal(channel);
        }
      } else if (abrirCanalOnStreams) {
        abrirCanalOnStreams(channel);
      }
      return true;
    }
  }

  const CARD_STEP = COMPONENT_SIZE.CARD_WIDTH + SPACING.GAP_LARGE; // 340 + 24 = 364px

  class ChannelCategoryRow extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 304,
        alpha: 1,
        AccentTick: {
          x: SPACING.SAFE_X,
          y: 5,
          w: 5,
          h: 24,
          rect: true,
          color: COLORS.NETFLIX_RED,
          alpha: 0.7
        },
        Title: {
          x: SPACING.SAFE_X + 14,
          y: 0,
          text: {
            text: '',
            fontSize: 26,
            fontStyle: 'bold',
            fontFace: TYPOGRAPHY.FONT_FAMILY,
            textColor: COLORS.TEXT_LIGHT
          }
        },
        Slider: {
          x: SPACING.SAFE_X,
          y: 44,
          Items: {}
        }
      };
    }
    _init() {
      this._index = 0;
      this._poolSize = 10;
      const items = [];
      for (let i = 0; i < this._poolSize; i++) {
        items.push({
          type: ChannelCard,
          alpha: 0,
          x: -9999
        });
      }
      this.tag('Slider.Items').children = items;
      this._cardsPool = this.tag('Slider.Items').children;
    }
    set category(data) {
      const title = data.title,
        channels = data.channels,
        toggleInfo = data.toggleInfo,
        abrirCanal = data.abrirCanal,
        abrirCanalOnStreams = data.abrirCanalOnStreams,
        abrirCanalOnDemand = data.abrirCanalOnDemand,
        navigateYouTube = data.navigateYouTube;
      if (!channels || channels.length === 0) {
        this.alpha = 0;
        this._channelData = [];
        return;
      }
      this.alpha = 1;
      this._isLiveGroup = title === 'AHORA' || title === 'EN VIVO AHORA';
      const displayTitle = this._isLiveGroup ? 'En Vivo Ahora' : 'Canales On Demand';
      this.tag('Title').text.text = "".concat(displayTitle, "  (").concat(channels.length, ")");
      this._callbacks = {
        toggleInfo,
        abrirCanal,
        abrirCanalOnStreams,
        abrirCanalOnDemand,
        navigateYouTube
      };
      let currentFocusedName = null;
      if (this._channelData && this._channelData[this._index]) {
        currentFocusedName = this._channelData[this._index].channel.ChannelName;
      }
      this._channelData = channels.map((channel, i) => ({
        channel,
        x: i * CARD_STEP,
        index: i
      }));
      if (currentFocusedName) {
        const nextIdx = this._channelData.findIndex(d => d.channel.ChannelName === currentFocusedName);
        this._index = nextIdx !== -1 ? nextIdx : 0;
      } else if (this._index >= this._channelData.length) {
        this._index = 0;
      }
      this._cardsPool.forEach(card => {
        card._currentDataIdx = -1;
        card.alpha = 0;
        card.x = -9999;
      });
      this._updateScroll(true);
    }
    getFocusedChannel() {
      if (!this._channelData || this._channelData.length === 0) return null;
      const entry = this._channelData[this._index];
      return entry ? entry.channel : null;
    }
    _focus() {
      this.tag('Title').text.textColor = COLORS.TEXT_WHITE;
      this.tag('AccentTick').alpha = 1;
    }
    _unfocus() {
      this.tag('Title').text.textColor = COLORS.TEXT_GRAY;
      this.tag('AccentTick').alpha = 0.45;
    }
    _handleLeft() {
      if (this._index > 0) {
        this._index--;
        this._updateScroll(false);
        this._refocus();
        return true;
      }
      return false;
    }
    _handleRight() {
      if (this._channelData && this._index < this._channelData.length - 1) {
        this._index++;
        this._updateScroll(false);
        this._refocus();
        return true;
      }
      return false;
    }
    _updateScroll() {
      if (!this._channelData || this._channelData.length === 0) return;
      const totalContentWidth = this._channelData.length * CARD_STEP - SPACING.GAP_LARGE + SPACING.SAFE_X * 2;
      const visibleTrackWidth = 1920 - SPACING.SAFE_X;
      let targetX = SPACING.SAFE_X - this._index * CARD_STEP;
      if (totalContentWidth > 1920) {
        const minX = visibleTrackWidth - (this._channelData.length * CARD_STEP - SPACING.GAP_LARGE);
        targetX = Math.max(minX, Math.min(SPACING.SAFE_X, targetX));
      } else {
        targetX = SPACING.SAFE_X;
      }

      // Desplazamiento directo sin interpolación pesada para respuesta instantánea en Smart TV
      this.tag('Slider').x = targetX;

      // Ventana de virtualización basada en la posición real targetX del Slider
      const leftVisibleCoord = Math.max(0, SPACING.SAFE_X - targetX);
      const rightVisibleCoord = leftVisibleCoord + (1920 - SPACING.SAFE_X);
      const startIdx = Math.max(0, Math.floor(leftVisibleCoord / CARD_STEP) - 1);
      const endIdx = Math.min(this._channelData.length - 1, Math.ceil(rightVisibleCoord / CARD_STEP) + 1);
      this._cardsPool.forEach(card => {
        if (card._currentDataIdx !== -1 && (card._currentDataIdx < startIdx || card._currentDataIdx > endIdx)) {
          card.alpha = 0;
          card._currentDataIdx = -1;
          card.x = -9999;
        }
      });
      for (let i = startIdx; i <= endIdx; i++) {
        const data = this._channelData[i];
        const poolIndex = i % this._poolSize;
        const card = this._cardsPool[poolIndex];
        if (card._currentDataIdx !== i) {
          card.patch({
            x: data.x,
            alpha: 1,
            item: {
              channel: data.channel,
              isLiveGroup: this._isLiveGroup,
              ...this._callbacks
            }
          });
          card._currentDataIdx = i;
        }
      }
    }
    _getFocused() {
      if (!this._channelData || this._channelData.length === 0) return this;
      const poolIndex = this._index % this._poolSize;
      return this._cardsPool[poolIndex];
    }
  }

  class SearchModal extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 1080,
        Background: {
          w: 1920,
          h: 1080,
          rect: true,
          color: 0xd908080a
        },
        Container: {
          x: 960,
          y: 540,
          mount: 0.5,
          w: 1180,
          h: 640,
          rect: true,
          color: COLORS.BG_DARK,
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            radius: BORDER_RADIUS.LARGE,
            stroke: 2,
            strokeColor: COLORS.BORDER_LIGHT
          },
          AccentBar: {
            x: 48,
            y: 36,
            w: 6,
            h: 34,
            rect: true,
            color: COLORS.NETFLIX_RED
          },
          Title: {
            x: 68,
            y: 32,
            text: {
              text: 'Buscar canal',
              fontSize: 32,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_WHITE
            }
          },
          InputBox: {
            x: 48,
            y: 92,
            w: 1084,
            h: 68,
            rect: true,
            color: COLORS.BG_BLACK,
            shader: {
              type: Lightning$1.shaders.RoundedRectangle,
              radius: BORDER_RADIUS.MEDIUM,
              stroke: 2,
              strokeColor: COLORS.NETFLIX_RED
            },
            InputText: {
              x: 24,
              mountY: 0.5,
              y: 35,
              text: {
                text: '',
                fontSize: 28,
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE
              }
            }
          },
          Keyboard: {
            x: 48,
            y: 190
          },
          Hint: {
            x: 590,
            y: 594,
            mountX: 0.5,
            text: {
              text: 'OK  Escribir / Ejecutar     •     ↩ ATRÁS  Cerrar',
              fontSize: 17,
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_MUTED
            }
          }
        }
      };
    }
    _construct() {
      this._searchText = '';
      this._onSearch = null;
      this._rowIndex = 0;
      this._colIndex = 0;
      this._prevFlatIndex = -1;
      this._keyboardLayout = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '1', '2', '3'], ['4', '5', '6', '7', '8', '9', '0', '-', '_'], ['ESPACIO', 'BORRAR', 'LIMPIAR', 'BUSCAR', 'CANCELAR']];
      this._keysGrid = [];
    }
    _init() {
      this._buildKeyboard();
    }
    set config(data) {
      this._onSearch = data.onSearch;
      this._searchText = data.searchText || '';
      this._updateDisplay();
      this._rowIndex = 0;
      this._colIndex = 0;
      this._updateKeyboardFocus();
    }
    _updateDisplay() {
      const input = this.tag('Container.InputBox.InputText');
      if (this._searchText) {
        input.text.text = "".concat(this._searchText, "|");
        input.text.textColor = COLORS.TEXT_WHITE;
      } else {
        input.text.text = 'Escribí el nombre del canal...';
        input.text.textColor = COLORS.TEXT_MUTED;
      }
    }
    _buildKeyboard() {
      const keyboard = this.tag('Container.Keyboard');
      const gap = 12;
      const areaW = 1084;
      let yPos = 0;
      const keysList = [];
      this._keysGrid = [];
      this._keyboardLayout.forEach(row => {
        const rowNodes = [];
        const rowWidth = row.reduce((acc, key) => acc + this._getKeyWidth(key) + gap, 0) - gap;
        let xPos = Math.round((areaW - rowWidth) / 2);
        row.forEach(key => {
          const bw = this._getKeyWidth(key);
          const isPrimaryAction = key === 'BUSCAR';
          keysList.push({
            x: xPos,
            y: yPos,
            w: bw,
            h: 62,
            rect: true,
            color: isPrimaryAction ? COLORS.NETFLIX_RED : COLORS.BG_PANEL,
            _baseColor: isPrimaryAction ? COLORS.NETFLIX_RED : COLORS.BG_PANEL,
            shader: {
              type: Lightning$1.shaders.RoundedRectangle,
              radius: BORDER_RADIUS.MEDIUM
            },
            Label: {
              x: bw / 2,
              y: 32,
              mount: 0.5,
              text: {
                text: key,
                fontSize: key.length > 1 ? 20 : 24,
                fontStyle: 'bold',
                fontFace: TYPOGRAPHY.FONT_FAMILY,
                textColor: COLORS.TEXT_WHITE
              }
            }
          });
          rowNodes.push({
            key,
            index: keysList.length - 1
          });
          xPos += bw + gap;
        });
        this._keysGrid.push(rowNodes);
        yPos += 62 + gap;
      });
      keyboard.children = keysList;
    }
    _getKeyWidth(key) {
      if (key === 'ESPACIO') return 210;
      if (key === 'BUSCAR') return 200;
      if (key === 'BORRAR' || key === 'LIMPIAR' || key === 'CANCELAR') return 180;
      return 76;
    }

    /**
     * Actualización O(1) de foco: solo modifica la tecla anterior y la nueva (2 patches en vez de 45)
     */
    _updateKeyboardFocus() {
      const children = this.tag('Container.Keyboard').children;
      if (!children || children.length === 0) return;
      if (this._prevFlatIndex >= 0 && children[this._prevFlatIndex]) {
        const prevBtn = children[this._prevFlatIndex];
        prevBtn.patch({
          color: prevBtn._baseColor || COLORS.BG_PANEL,
          Label: {
            text: {
              textColor: COLORS.TEXT_WHITE
            }
          }
        });
      }
      const flatIndex = this._keysGrid[this._rowIndex][this._colIndex].index;
      const btn = children[flatIndex];
      if (btn) {
        btn.patch({
          color: COLORS.FOCUS_WHITE,
          Label: {
            text: {
              textColor: COLORS.BG_BLACK
            }
          }
        });
        this._prevFlatIndex = flatIndex;
      }
    }
    _handleUp() {
      if (this._rowIndex > 0) {
        const prevRatio = this._colIndex / Math.max(1, this._keysGrid[this._rowIndex].length - 1);
        this._rowIndex--;
        const targetMax = this._keysGrid[this._rowIndex].length - 1;
        this._colIndex = Math.min(targetMax, Math.round(prevRatio * targetMax));
        this._updateKeyboardFocus();
      }
      return true;
    }
    _handleDown() {
      if (this._rowIndex < this._keysGrid.length - 1) {
        const prevRatio = this._colIndex / Math.max(1, this._keysGrid[this._rowIndex].length - 1);
        this._rowIndex++;
        const targetMax = this._keysGrid[this._rowIndex].length - 1;
        this._colIndex = Math.min(targetMax, Math.round(prevRatio * targetMax));
        this._updateKeyboardFocus();
      }
      return true;
    }
    _handleLeft() {
      if (this._colIndex > 0) {
        this._colIndex--;
        this._updateKeyboardFocus();
      }
      return true;
    }
    _handleRight() {
      if (this._colIndex < this._keysGrid[this._rowIndex].length - 1) {
        this._colIndex++;
        this._updateKeyboardFocus();
      }
      return true;
    }
    _handleEnter() {
      const key = this._keysGrid[this._rowIndex][this._colIndex].key;
      if (key === 'ESPACIO') {
        this._searchText += ' ';
      } else if (key === 'BORRAR') {
        if (this._searchText.length > 0) {
          this._searchText = this._searchText.slice(0, -1);
        }
      } else if (key === 'LIMPIAR') {
        this._searchText = '';
        if (this._onSearch) this._onSearch('');
        this.fireAncestors('$closeSearchModal');
        return true;
      } else if (key === 'CANCELAR') {
        this.fireAncestors('$closeSearchModal');
        return true;
      } else if (key === 'BUSCAR') {
        if (this._onSearch) this._onSearch(this._searchText.trim());
        this.fireAncestors('$closeSearchModal');
        return true;
      } else {
        this._searchText += key.toLowerCase();
      }
      this._updateDisplay();
      return true;
    }
    _handleKey(e) {
      if (!e || !e.key) return false;
      if (e.key === 'Backspace') {
        this._searchText = this._searchText.slice(0, -1);
        this._updateDisplay();
        return true;
      }
      if (e.key.length === 1 && /^[a-zA-Z0-9ñÑ _-]$/.test(e.key)) {
        this._searchText += e.key.toLowerCase();
        this._updateDisplay();
        return true;
      }
      return false;
    }
    _handleBack() {
      this.fireAncestors('$closeSearchModal');
      return true;
    }
  }

  const ITEM_H = 58;
  const POOL_SIZE = 12;
  const VISIBLE_COUNT = 10;
  class SelectItem extends Lightning$1.Component {
    static _template() {
      return {
        w: 680,
        h: 52,
        rect: true,
        color: COLORS.TRANSPARENT,
        shader: {
          type: Lightning$1.shaders.RoundedRectangle,
          radius: BORDER_RADIUS.MEDIUM
        },
        Label: {
          x: 24,
          mountY: 0.5,
          y: 27,
          text: {
            text: '',
            fontSize: TYPOGRAPHY.FONT_SIZE_NORMAL,
            fontFace: TYPOGRAPHY.FONT_FAMILY,
            textColor: COLORS.TEXT_LIGHT,
            wordWrapWidth: 632,
            maxLines: 1,
            textOverflow: 'ellipsis'
          }
        }
      };
    }
    set item(v) {
      this._value = v.value;
      this._isCurrent = Boolean(v.isCurrent);
      this.tag('Label').text.text = this._isCurrent ? "\u2713  ".concat(v.label) : v.label;
      this._syncVisual();
    }
    _syncVisual() {
      if (this.hasFocus()) {
        this.patch({
          color: COLORS.FOCUS_WHITE,
          Label: {
            text: {
              textColor: COLORS.BG_BLACK,
              fontStyle: 'bold'
            }
          }
        });
      } else if (this._isCurrent) {
        this.patch({
          color: 0xff2c1215,
          Label: {
            text: {
              textColor: COLORS.TEXT_WHITE,
              fontStyle: 'bold'
            }
          }
        });
      } else {
        this.patch({
          color: COLORS.TRANSPARENT,
          Label: {
            text: {
              textColor: COLORS.TEXT_LIGHT,
              fontStyle: 'normal'
            }
          }
        });
      }
    }
    _focus() {
      this._syncVisual();
    }
    _unfocus() {
      this._syncVisual();
    }
    _handleEnter() {
      this.fireAncestors('$onOptionSelected', this._value);
      return true;
    }
  }
  class SelectModal extends Lightning$1.Component {
    static _template() {
      return {
        w: 1920,
        h: 1080,
        Background: {
          w: 1920,
          h: 1080,
          rect: true,
          color: 0xd908080a
        },
        Container: {
          x: 960,
          y: 540,
          mount: 0.5,
          w: 760,
          h: 760,
          rect: true,
          color: COLORS.BG_DARK,
          shader: {
            type: Lightning$1.shaders.RoundedRectangle,
            radius: BORDER_RADIUS.LARGE,
            stroke: 2,
            strokeColor: COLORS.BORDER_LIGHT
          },
          AccentLine: {
            x: 40,
            y: 34,
            w: 6,
            h: 34,
            rect: true,
            color: COLORS.NETFLIX_RED
          },
          Title: {
            x: 60,
            y: 30,
            text: {
              text: 'Seleccionar',
              fontSize: 32,
              fontStyle: 'bold',
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_WHITE
            }
          },
          Counter: {
            x: 720,
            y: 38,
            mountX: 1,
            text: {
              text: '',
              fontSize: 18,
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_GRAY
            }
          },
          ListBounds: {
            x: 40,
            y: 96,
            w: 680,
            h: VISIBLE_COUNT * ITEM_H,
            clipping: true,
            Slider: {
              y: 0,
              Items: {}
            }
          },
          FooterHint: {
            x: 380,
            y: 714,
            mountX: 0.5,
            text: {
              text: '▲ ▼  Desplazar     •     OK  Confirmar     •     ↩ ATRÁS  Cancelar',
              fontSize: 17,
              fontFace: TYPOGRAPHY.FONT_FAMILY,
              textColor: COLORS.TEXT_MUTED
            }
          }
        }
      };
    }
    _construct() {
      this._index = 0;
      this._optionsData = [];
      this._onSelect = null;
      this._pool = null;
    }
    _init() {
      const nodes = [];
      for (let i = 0; i < POOL_SIZE; i++) {
        nodes.push({
          type: SelectItem,
          alpha: 0,
          y: -9999
        });
      }
      this.tag('Container.ListBounds.Slider.Items').children = nodes;
      this._pool = this.tag('Container.ListBounds.Slider.Items').children;
    }
    set config(data) {
      this._onSelect = data.onSelect;
      const selectedValue = data.selectedValue !== undefined ? data.selectedValue : null;
      this.tag('Container.Title').text.text = data.title || 'Seleccionar';
      this._optionsData = (data.options || []).map(opt => ({
        ...opt,
        isCurrent: selectedValue !== null && opt.value === selectedValue
      }));
      const activeIdx = this._optionsData.findIndex(o => o.isCurrent);
      this._index = activeIdx !== -1 ? activeIdx : 0;
      this._pool.forEach(node => {
        node._currentDataIdx = -1;
        node.alpha = 0;
        node.y = -9999;
      });
      this._updateScroll(true);
    }
    _handleUp() {
      if (this._index > 0) {
        this._index--;
        this._updateScroll(false);
        this._refocus();
      }
      return true;
    }
    _handleDown() {
      if (this._index < this._optionsData.length - 1) {
        this._index++;
        this._updateScroll(false);
        this._refocus();
      }
      return true;
    }
    _handleBack() {
      this.fireAncestors('$closeSelectModal');
      return true;
    }
    _updateScroll() {
      let instant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      const total = this._optionsData.length;
      this.tag('Container.Counter').text.text = total > 0 ? "".concat(this._index + 1, " / ").concat(total) : '';
      if (total === 0) return;
      const maxScrollIdx = Math.max(0, total - VISIBLE_COUNT);
      const topIdx = Math.max(0, Math.min(maxScrollIdx, this._index - 4));
      const targetY = -(topIdx * ITEM_H);
      if (instant) {
        this.tag('Container.ListBounds.Slider').y = targetY;
      } else {
        this.tag('Container.ListBounds.Slider').patch({
          smooth: {
            y: [targetY, {
              duration: 0.12
            }]
          }
        });
      }
      const startIdx = Math.max(0, topIdx - 1);
      const endIdx = Math.min(total - 1, topIdx + VISIBLE_COUNT);
      this._pool.forEach(node => {
        if (node._currentDataIdx !== -1 && (node._currentDataIdx < startIdx || node._currentDataIdx > endIdx)) {
          node.alpha = 0;
          node._currentDataIdx = -1;
          node.y = -9999;
        }
      });
      for (let i = startIdx; i <= endIdx; i++) {
        const poolIdx = i % POOL_SIZE;
        const node = this._pool[poolIdx];
        if (node._currentDataIdx !== i) {
          node.patch({
            y: i * ITEM_H,
            alpha: 1,
            item: this._optionsData[i]
          });
          node._currentDataIdx = i;
        }
      }
    }
    _getFocused() {
      if (!this._optionsData || this._optionsData.length === 0) return this;
      const poolIdx = this._index % POOL_SIZE;
      return this._pool[poolIdx] || this;
    }
    $onOptionSelected(value) {
      if (this._onSelect) this._onSelect(value);
    }
  }

  class App$1 extends Lightning$1.Component {
    static getFonts() {
      return [{
        family: 'Regular',
        url: Utils.asset('fonts/Roboto-Regular.ttf')
      }];
    }
    static _template() {
      return {
        w: 1920,
        h: 1080,
        Background: {
          w: 1920,
          h: 1080,
          Base: {
            w: 1920,
            h: 1080,
            rect: true,
            color: COLORS.BG_CANVAS
          },
          Atmosphere: {
            w: 1920,
            h: 1080,
            alpha: 0.22,
            src: Utils.asset('images/background.png')
          }
        },
        Main: {
          Header: {
            type: AppHeader,
            x: 0,
            y: 0,
            zIndex: 20
          },
          Content: {
            x: 0,
            y: 96,
            w: 1920,
            h: 936,
            Status: {
              type: StatusDisplay
            },
            Grid: {
              type: ScheduleGrid,
              alpha: 0,
              visible: false
            },
            CardsSection: {
              alpha: 0,
              visible: false,
              Hero: {
                type: HeroBanner,
                x: 0,
                y: 0
              },
              RailsViewport: {
                x: 0,
                y: 350,
                w: 1920,
                h: 586,
                clipping: true,
                RailsSlider: {
                  x: 0,
                  y: 0,
                  CardsLive: {
                    type: ChannelCategoryRow,
                    alpha: 0,
                    visible: false,
                    y: 8
                  },
                  CardsDemand: {
                    type: ChannelCategoryRow,
                    alpha: 0,
                    visible: false,
                    y: 320
                  }
                }
              }
            }
          },
          Footer: {
            type: AppFooter,
            x: 0,
            y: 1032,
            zIndex: 15
          }
        },
        Overlays: {
          Player: {
            type: TVPlayer,
            alpha: 0,
            visible: false,
            zIndex: 40
          },
          Info: {
            type: InfoModal,
            alpha: 0,
            visible: false,
            zIndex: 30
          },
          Search: {
            type: SearchModal,
            alpha: 0,
            visible: false,
            zIndex: 35
          },
          Select: {
            type: SelectModal,
            alpha: 0,
            visible: false,
            zIndex: 36
          }
        }
      };
    }
    _init() {
      this._channels = [];
      this._allChannels = [];
      this._provincesList = [];
      this._citiesList = [];
      this._cityProvinceMap = {};
      this._isLoadingChannels = true;
      this._searchText = '';
      this._selectedProvince = '';
      this._selectedCity = '';
      this._viewMode = 'cards'; // 'cards' | 'grid'
      this._cameFromChannelJump = false;
      this._savedSearchBeforeJump = '';
      this._pendingGridAutoDay = false;
      this._focusedSection = 'header'; // 'header' | 'content' | 'modal' | 'player' | 'search' | 'select'
      this._contentRowIndex = 0; // 0 = En Vivo Ahora, 1 = Canales On Demand
      this._lastBackTs = 0;

      // Puente universal para botón Atrás físico de Smart TVs (con protección contra doble disparo)
      window.addEventListener('appGoBack', () => {
        const now = Date.now();
        if (now - this._lastBackTs < 120) return;
        this._lastBackTs = now;
        let node = this._getFocused();
        while (node) {
          if (typeof node._handleBack === 'function' && node._handleBack()) {
            break;
          }
          node = node.parent;
        }
      });
      this.tag('Overlays.Info').onClose = () => {
        this._focusedSection = this._previousFocus || 'header';
        this.tag('Overlays.Info').alpha = 0;
        this.tag('Overlays.Info').visible = false;
        this._refocus();
      };
      this.tag('Overlays.Player').onClose = () => {
        this._focusedSection = 'content';
        this.tag('Overlays.Player').alpha = 0;
        this.tag('Overlays.Player').visible = false;
        this.tag('Main').alpha = 1;
        this.tag('Background').alpha = 1;
        this._refocus();
      };
      this._fetchChannels(false);
      this._fetchProvinces();
    }
    async _fetchChannels() {
      let forceRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      try {
        this._isLoadingChannels = true;
        this._updateUI();
        const freshChannels = await getChannels({
          forceRefresh
        });
        this._allChannels = freshChannels;
        this._filterChannelsArray();
        if (this._channels.length > 0 && this._focusedSection === 'header' && !forceRefresh) {
          this._focusedSection = 'content';
        }
        prevalidateAllScheduleChannels(this._allChannels, cleanedAll => {
          this._allChannels = cleanedAll;
          this._filterChannelsArray();
          if (this._viewMode === 'grid' && !this._isLoadingChannels && this._focusedSection !== 'player') {
            this._updateUI();
          }
        });
      } catch (err) {
        console.error('Error en App al cargar canales:', err);
      } finally {
        this._isLoadingChannels = false;
        this._updateUI();
        this._refocus();
      }
    }
    async _fetchProvinces() {
      try {
        const data = await getProvinces();
        this._provincesList = data.provinces;
        this._cityProvinceMap = data.cityProvinceMap;
        this._citiesList = Object.keys(this._cityProvinceMap).sort();
        this._updateUI();
      } catch (err) {
        console.error('Error cargando provincias:', err);
      }
    }
    _filterChannelsArray() {
      let filtered = this._allChannels;
      if (this._searchText.trim() !== '') {
        const q = this._searchText.toLowerCase();
        if (this._cameFromChannelJump) {
          // Al saltar desde un canal específico, filtramos exactamente ese canal
          const exact = filtered.filter(c => c.ChannelName.toLowerCase() === q);
          filtered = exact.length > 0 ? exact : filtered.filter(c => c.ChannelName.toLowerCase().indexOf(q) !== -1);
        } else {
          filtered = filtered.filter(c => c.ChannelName.toLowerCase().indexOf(q) !== -1);
        }
      }
      if (this._selectedProvince !== '') {
        this._citiesList = Object.keys(this._cityProvinceMap).filter(c => this._cityProvinceMap[c] === this._selectedProvince).sort();
        if (this._citiesList.indexOf(this._selectedCity) === -1) {
          this._selectedCity = '';
        }
        filtered = filtered.filter(c => {
          if (!c.ChannelCity) return false;
          return this._cityProvinceMap[c.ChannelCity] === this._selectedProvince;
        });
      } else {
        this._citiesList = Object.keys(this._cityProvinceMap).sort();
      }
      if (this._selectedCity !== '') {
        filtered = filtered.filter(c => c.ChannelCity === this._selectedCity);
      }
      this._channels = filtered;
    }
    _applyFilters() {
      this._filterChannelsArray();
      this._contentRowIndex = 0;
      this._updateUI();
    }
    $onChannelsSanitized() {
      this._allChannels = purgeDeletedFromChannels(this._allChannels);
      this._filterChannelsArray();
    }
    $onChannelFocused(channel) {
      if (!channel) return;
      const provinceName = channel.ChannelCity ? this._cityProvinceMap[channel.ChannelCity] || '' : '';
      this.tag('Main.Content.CardsSection.Hero').featured = {
        channel,
        provinceName
      };
    }
    _openInfoModal() {
      let channelOrNull = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this._previousFocus = this._focusedSection;
      this._focusedSection = 'modal';
      let channelObj = null;
      if (channelOrNull && typeof channelOrNull === 'object') {
        channelObj = channelOrNull;
      } else if (typeof channelOrNull === 'string') {
        channelObj = this._allChannels.find(c => c.ChannelName === channelOrNull) || null;
      }
      const provinceName = channelObj && channelObj.ChannelCity ? this._cityProvinceMap[channelObj.ChannelCity] || '' : '';
      this.tag('Overlays.Info').visible = true;
      this.tag('Overlays.Info').alpha = 1;
      this.tag('Overlays.Info').modalData = channelObj ? {
        channel: channelObj,
        provinceName,
        onPlayChannel: ch => this._playChannel(ch)
      } : null;
      this._refocus();
    }
    _syncRailsScroll() {
      const liveRow = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider.CardsLive');
      const demandRow = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider.CardsDemand');
      const slider = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider');
      const hasLive = liveRow.visible;
      const hasDemand = demandRow.visible;
      let targetY = 0;
      if (hasLive && hasDemand && this._contentRowIndex === 1) {
        targetY = -256;
      }
      slider.y = targetY;
      const activeRow = this._contentRowIndex === 0 && hasLive ? liveRow : hasDemand ? demandRow : hasLive ? liveRow : null;
      if (activeRow) {
        const ch = activeRow.getFocusedChannel();
        if (ch) this.$onChannelFocused(ch);
      }
    }
    _updateUI() {
      const hasAnyLoaded = this._allChannels.length > 0;
      const hasFiltered = this._channels.length > 0;
      const hasActiveFilters = Boolean(this._searchText || this._selectedProvince || this._selectedCity);
      const canalesEnVivo = this._channels.filter(c => c.Actives && Object.keys(c.Actives).length > 0);
      const canalesOnDemand = this._channels.filter(c => !c.Actives || Object.keys(c.Actives).length === 0);
      this.tag('Main.Content.Status').status = {
        isLoading: this._isLoadingChannels,
        hasChannels: hasFiltered,
        hasFilteredChannels: hasFiltered || !hasAnyLoaded,
        searchText: this._searchText,
        hasActiveFilters
      };
      const gridComp = this.tag('Main.Content.Grid');
      const cardsSection = this.tag('Main.Content.CardsSection');
      const liveRow = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider.CardsLive');
      const demandRow = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider.CardsDemand');
      if (hasFiltered && !this._isLoadingChannels) {
        const sharedCallbacks = {
          navigateYouTube: (url, videoMeta) => this._openPlayer(url, videoMeta),
          toggleInfo: channelRef => this._openInfoModal(channelRef),
          abrirCanal: channel => this._playChannel(channel),
          abrirCanalOnStreams: channel => this._playChannel(channel),
          abrirCanalOnDemand: channel => this._playChannel(channel)
        };
        if (this._viewMode === 'grid') {
          cardsSection.alpha = 0;
          cardsSection.visible = false;
          const autoFocusBestDay = this._pendingGridAutoDay;
          this._pendingGridAutoDay = false;
          gridComp.visible = true;
          gridComp.alpha = 1;
          gridComp.config = {
            channels: this._channels,
            autoFocusBestDay,
            ...sharedCallbacks
          };
        } else {
          gridComp.alpha = 0;
          gridComp.visible = false;
          cardsSection.visible = true;
          cardsSection.alpha = 1;
          const showLive = canalesEnVivo.length > 0;
          const showDemand = canalesOnDemand.length > 0;
          liveRow.visible = showLive;
          liveRow.alpha = showLive ? 1 : 0;
          demandRow.visible = showDemand;
          demandRow.alpha = showDemand ? 1 : 0;
          if (showLive) {
            liveRow.y = 8;
            liveRow.category = {
              title: 'AHORA',
              channels: canalesEnVivo,
              ...sharedCallbacks
            };
          }
          if (showDemand) {
            demandRow.y = showLive ? 320 : 8;
            demandRow.category = {
              title: 'ON DEMAND',
              channels: canalesOnDemand,
              ...sharedCallbacks
            };
          }
          if (this._contentRowIndex === 0 && !showLive && showDemand) {
            this._contentRowIndex = 1;
          } else if (this._contentRowIndex === 1 && !showDemand && showLive) {
            this._contentRowIndex = 0;
          }
          this._syncRailsScroll(true);
        }
      } else {
        gridComp.alpha = 0;
        gridComp.visible = false;
        cardsSection.alpha = 0;
        cardsSection.visible = false;
      }
      this.tag('Main.Header').config = {
        searchText: this._searchText,
        viewMode: this._viewMode,
        selectedProvince: this._selectedProvince,
        selectedCity: this._selectedCity,
        provinces: this._provincesList,
        cities: this._citiesList,
        isRefreshing: this._isLoadingChannels,
        callbacks: {
          onViewModeChange: mode => {
            if (mode === 'cards' && this._cameFromChannelJump) {
              this._cameFromChannelJump = false;
              this._searchText = this._savedSearchBeforeJump || '';
              this._filterChannelsArray();
            }
            this._viewMode = mode;
            if (this._channels.length > 0 && !this._isLoadingChannels) {
              this._focusedSection = 'content';
            }
            this._updateUI();
            this._refocus();
          },
          onSearchClick: () => {
            this._previousFocus = this._focusedSection;
            this._focusedSection = 'search';
            this.tag('Overlays.Search').visible = true;
            this.tag('Overlays.Search').alpha = 1;
            this.tag('Overlays.Search').config = {
              searchText: this._searchText,
              onSearch: text => this._performSearch(text)
            };
            this._refocus();
          },
          onProvinceClick: () => {
            this._previousFocus = this._focusedSection;
            this._focusedSection = 'select';
            this.tag('Overlays.Select').visible = true;
            this.tag('Overlays.Select').alpha = 1;
            this.tag('Overlays.Select').config = {
              title: 'Filtrar por Provincia',
              selectedValue: this._selectedProvince,
              options: [{
                label: 'Todas las provincias',
                value: ''
              }, ...this._provincesList.map(p => ({
                label: p,
                value: p
              }))],
              onSelect: prov => {
                this._selectedProvince = prov;
                this._applyFilters();
                this.$closeSelectModal();
              }
            };
            this._refocus();
          },
          onCityClick: () => {
            if (!this._citiesList || this._citiesList.length === 0) return;
            this._previousFocus = this._focusedSection;
            this._focusedSection = 'select';
            this.tag('Overlays.Select').visible = true;
            this.tag('Overlays.Select').alpha = 1;
            this.tag('Overlays.Select').config = {
              title: 'Filtrar por Ciudad',
              selectedValue: this._selectedCity,
              options: [{
                label: 'Todas las ciudades',
                value: ''
              }, ...this._citiesList.map(c => ({
                label: c,
                value: c
              }))],
              onSelect: city => {
                this._selectedCity = city;
                this._applyFilters();
                this.$closeSelectModal();
              }
            };
            this._refocus();
          },
          onRefresh: () => this._fetchChannels(true),
          onShowInfo: () => this._openInfoModal(null)
        }
      };
      this.tag('Main.Footer').config = {
        viewMode: this._viewMode,
        liveCount: canalesEnVivo.length,
        totalCount: this._channels.length,
        isRefreshing: this._isLoadingChannels
      };
    }

    /**
     * Navega internamente a la pestaña de Transmisiones filtrando por el canal elegido
     * y posicionándose automáticamente en el día más reciente con contenido.
     */
    _openChannelTransmissions(channel) {
      if (!channel || !channel.ChannelName) return;
      if (!this._cameFromChannelJump) {
        this._savedSearchBeforeJump = this._searchText;
        this._savedRowBeforeJump = this._contentRowIndex;
      }
      this._cameFromChannelJump = true;
      this._searchText = channel.ChannelName;
      this._viewMode = 'grid';
      this._pendingGridAutoDay = true;
      this._focusedSection = 'content';
      this._filterChannelsArray();
      this._updateUI();
      this._refocus();
    }

    /**
     * Reproduce en el reproductor interno si está en vivo; de lo contrario lleva
     * a la pestaña de Transmisiones filtrada por ese canal (nunca sale de la app).
     */
    _playChannel(channel) {
      if (!channel) return;
      const activeVideos = channel.ActiveList || Object.values(channel.Actives || {});
      if (activeVideos.length > 0 && activeVideos[0].VideoId) {
        const mainVid = activeVideos[0];
        this._openPlayer("https://www.youtube.com/watch?v=".concat(mainVid.VideoId), {
          ...mainVid,
          Live: mainVid.Live !== false
        });
        return;
      }
      this._openChannelTransmissions(channel);
    }
    _resolvePlaybackMeta(videoId) {
      let rawMeta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let source = rawMeta;
      let bucketType = null;
      if (!source && videoId && this._allChannels) {
        for (let i = 0; i < this._allChannels.length; i++) {
          const ch = this._allChannels[i];
          if (ch.Actives && ch.Actives[videoId]) {
            source = ch.Actives[videoId];
            bucketType = 'active';
            break;
          }
          if (ch.Past && ch.Past[videoId]) {
            source = ch.Past[videoId];
            bucketType = 'past';
            break;
          }
          if (ch.Upcoming && ch.Upcoming[videoId]) {
            source = ch.Upcoming[videoId];
            bucketType = 'upcoming';
            break;
          }
        }
      }
      if (!source) {
        return {
          isLive: true,
          isPremiere: false,
          isPast: false,
          referenceDate: ''
        };
      }
      const isLive = Boolean(bucketType === 'active' || source.Live);
      const isPremiere = Boolean(source.IsPremiere || source.WasPremiere);
      const isPast = Boolean(!isLive && (bucketType === 'past' || source.IsPast || source.ActualEndTime || source.EndedAt));
      const referenceDate = isPast ? source.ActualEndTime || source.EndedAt || source.ActualStartTime || source.EffectiveStartTime || source.ScheduledStartTime || '' : source.ActualStartTime || source.ScheduledStartTime || source.EffectiveStartTime || source.AddedAt || '';
      return {
        isLive,
        isPremiere,
        isPast,
        referenceDate
      };
    }
    _openPlayer(url) {
      let videoMeta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!url) return;
      const match = url.match(/v=([^&]+)/);
      if (match && match[1]) {
        const videoId = match[1];
        this._focusedSection = 'player';
        this.tag('Overlays.Player').playbackMeta = this._resolvePlaybackMeta(videoId, videoMeta);
        this.tag('Overlays.Player').videoId = videoId;
        this.tag('Overlays.Player').alpha = 1;
        this.tag('Overlays.Player').visible = true;
        this.tag('Main').alpha = 0;
        this.tag('Background').alpha = 0;
        this._refocus();
      }
    }
    _performSearch(text) {
      this._cameFromChannelJump = false;
      this._savedSearchBeforeJump = '';
      this._searchText = text.toLowerCase();
      this._applyFilters();
      this._focusedSection = this._channels.length > 0 ? 'content' : 'header';
      this._refocus();
    }
    $onSelectStream(data) {
      const channel = data.channel,
        activeVideos = data.activeVideos;
      this._previousFocus = this._focusedSection;
      this._focusedSection = 'select';
      this.tag('Overlays.Select').visible = true;
      this.tag('Overlays.Select').alpha = 1;
      this.tag('Overlays.Select').config = {
        title: "".concat(channel.ChannelName, " \u2014 En vivo"),
        options: activeVideos.map(v => ({
          label: (v.IsPremiere ? '★ ' : '● ') + (v.Title || channel.ChannelName),
          value: v.VideoId
        })),
        onSelect: videoId => {
          const chosen = activeVideos.find(v => v.VideoId === videoId) || null;
          this.tag('Overlays.Select').alpha = 0;
          this.tag('Overlays.Select').visible = false;
          this._openPlayer("https://www.youtube.com/watch?v=".concat(videoId), chosen ? {
            ...chosen,
            Live: chosen.Live !== false
          } : null);
        }
      };
      this._refocus();
    }
    $closeSearchModal() {
      this.tag('Overlays.Search').alpha = 0;
      this.tag('Overlays.Search').visible = false;
      this._focusedSection = this._previousFocus === 'content' && this._channels.length > 0 ? 'content' : 'header';
      this._updateUI();
      this._refocus();
    }
    $closeSelectModal() {
      this.tag('Overlays.Select').alpha = 0;
      this.tag('Overlays.Select').visible = false;
      this._focusedSection = this._previousFocus === 'content' && this._channels.length > 0 ? 'content' : 'header';
      this._updateUI();
      this._refocus();
    }
    _handleUp() {
      if (this._focusedSection === 'content') {
        const liveRow = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider.CardsLive');
        if (this._viewMode === 'cards' && this._contentRowIndex === 1 && liveRow.visible) {
          this._contentRowIndex = 0;
          this._syncRailsScroll(false);
          this._refocus();
          return true;
        }
        this._focusedSection = 'header';
        this._refocus();
        return true;
      }
      return true;
    }
    _handleDown() {
      if (this._focusedSection === 'header') {
        if (this._channels.length > 0 && !this._isLoadingChannels) {
          this._focusedSection = 'content';
          this._refocus();
        }
        return true;
      }
      if (this._focusedSection === 'content' && this._viewMode === 'cards') {
        const demandRow = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider.CardsDemand');
        if (this._contentRowIndex === 0 && demandRow.visible) {
          this._contentRowIndex = 1;
          this._syncRailsScroll(false);
          this._refocus();
          return true;
        }
        return true;
      }
      return true;
    }
    _getFocused() {
      if (this._focusedSection === 'search') return this.tag('Overlays.Search');
      if (this._focusedSection === 'select') return this.tag('Overlays.Select');
      if (this._focusedSection === 'modal') return this.tag('Overlays.Info');
      if (this._focusedSection === 'player') return this.tag('Overlays.Player');
      if (this._focusedSection === 'header') return this.tag('Main.Header');
      if (this._focusedSection === 'content') {
        const gridComp = this.tag('Main.Content.Grid');
        const liveRow = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider.CardsLive');
        const demandRow = this.tag('Main.Content.CardsSection.RailsViewport.RailsSlider.CardsDemand');
        if (this._viewMode === 'grid' && gridComp.visible) {
          return gridComp;
        }
        if (this._viewMode === 'cards') {
          if (this._contentRowIndex === 0 && liveRow.visible) return liveRow;
          if (this._contentRowIndex === 1 && demandRow.visible) return demandRow;
          if (liveRow.visible) {
            this._contentRowIndex = 0;
            return liveRow;
          }
          if (demandRow.visible) {
            this._contentRowIndex = 1;
            return demandRow;
          }
        }
      }
      return this.tag('Main.Header');
    }
    _handleBack() {
      // Si entramos a Transmisiones desde un canal On Demand, Atrás nos devuelve directo a Inicio en esa fila
      if (this._cameFromChannelJump && this._viewMode === 'grid') {
        this._cameFromChannelJump = false;
        this._searchText = this._savedSearchBeforeJump || '';
        this._viewMode = 'cards';
        this._contentRowIndex = typeof this._savedRowBeforeJump === 'number' ? this._savedRowBeforeJump : 1;
        this._focusedSection = 'content';
        this._filterChannelsArray();
        this._updateUI();
        this._refocus();
        return true;
      }
      if (this._focusedSection === 'content') {
        this._focusedSection = 'header';
        this._refocus();
        return true;
      }
      return true;
    }
  }

  function index$1 () {
    let appSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let platformSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let appData = arguments.length > 2 ? arguments[2] : undefined;
    // Ocultar etiqueta celeste de APP y SDK (Inspector de Lightning)
    appSettings.debug = false;
    appSettings.showVersion = false;
    platformSettings.inspector = false;

    // --- AJUSTE UNIVERSAL PARA CUALQUIER SMART TV ---
    // Inyectamos CSS global para garantizar que el canvas de Lightning
    // se adapte siempre al 100% de la pantalla sin importar el SO 
    // (WebOS, Tizen, Android TV, Roku, etc.) y sin usar setTimeouts.
    const style = document.createElement('style');
    style.innerHTML = "\n    html, body {\n      margin: 0; padding: 0;\n      width: 100%; height: 100%;\n      overflow: hidden; background-color: #000;\n    }\n    canvas {\n      width: 100% !important; height: 100% !important;\n      position: absolute !important; top: 0; left: 0;\n      z-index: 1 !important;\n    }\n  ";
    document.head.appendChild(style);

    // --- PUENTE CENTRALIZADO: BOTÓN ATRÁS ---
    // Esta función emite el evento que tu App.js SÍ está esperando escuchar
    const fireGoBack = () => {
      window.dispatchEvent(new CustomEvent('appGoBack'));

      // Por las dudas, también disparamos el escape tradicional para Lightning
      const escEvent = new KeyboardEvent('keydown', {
        key: 'Escape',
        code: 'Escape',
        bubbles: true
      });
      Object.defineProperty(escEvent, 'keyCode', {
        get: () => 27
      });
      window.dispatchEvent(escEvent);
    };

    // 1. TRAMPA CAPACITOR (ANDROID TV) - ¡El que evita que la app se cierre nativamente!
    if (window.Capacitor && window.Capacitor.isNativePlatform()) {
      // Usamos import dinámico para no romper Rollup/Lightning (evita el error app$1 is not defined)
      // Esto inicializa el plugin correctamente y secuestra el botón Atrás de Android OS.
      Promise.resolve().then(function () { return index; }).then(_ref => {
        let CapApp = _ref.App;
        CapApp.addListener('backButton', () => fireGoBack());
      }).catch(err => console.error('Error cargando Capacitor App', err));
    }

    // 2. TRAMPAS PARA SMART TV (SAMSUNG / LG / ETC)
    // Usamos la fase de captura (true) para interceptar el botón Atrás ANTES 
    // de que el iframe de YouTube se lo trague cuando tiene el foco.
    window.addEventListener('keydown', e => {
      if (e.keyCode === 10009 || e.keyCode === 461 || e.key === 'BrowserBack') {
        e.preventDefault();
        e.stopPropagation();
        fireGoBack();
      }
    }, true);
    if (window.tizen) {
      window.addEventListener('tizenhwkey', e => {
        if (e.keyName === 'Back' || e.keyName === 'back' || e.keyName === 'Return') {
          e.preventDefault();
          fireGoBack();
        }
      }, true);
    }

    // --- TRAMPA UNIVERSAL PARA EL BOTÓN ATRÁS (HISTORY API) ---
    window.history.pushState({
      noBackExitsApp: true
    }, '');
    window.addEventListener('popstate', () => {
      window.history.pushState({
        noBackExitsApp: true
      }, '');
      fireGoBack();
    });
    return Launch(App$1, appSettings, platformSettings, appData);
  }

  /*! Capacitor: https://capacitorjs.com/ - MIT License */
  var ExceptionCode;
  (function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
  })(ExceptionCode || (ExceptionCode = {}));
  class CapacitorException extends Error {
    constructor(message, code, data) {
      super(message);
      this.message = message;
      this.code = code;
      this.data = data;
    }
  }
  const getPlatformId = win => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
      return 'android';
    } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
      return 'ios';
    } else {
      return 'web';
    }
  };
  const createCapacitor = win => {
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = cap.Plugins = cap.Plugins || {};
    const getPlatform = () => {
      return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
    };
    const isNativePlatform = () => getPlatform() !== 'web';
    const isPluginAvailable = pluginName => {
      const plugin = registeredPlugins.get(pluginName);
      if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
        // JS implementation available for the current platform.
        return true;
      }
      if (getPluginHeader(pluginName)) {
        // Native implementation available.
        return true;
      }
      return false;
    };
    const getPluginHeader = pluginName => {
      var _a;
      return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
    };
    const handleError = err => win.console.error(err);
    const registeredPlugins = new Map();
    const registerPlugin = function (pluginName) {
      let jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const registeredPlugin = registeredPlugins.get(pluginName);
      if (registeredPlugin) {
        console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
        return registeredPlugin.proxy;
      }
      const platform = getPlatform();
      const pluginHeader = getPluginHeader(pluginName);
      let jsImplementation;
      const loadPluginImplementation = async () => {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = await jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = await jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }
        return jsImplementation;
      };
      const createPluginMethod = (impl, prop) => {
        var _a, _b;
        if (pluginHeader) {
          const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
          if (methodHeader) {
            if (methodHeader.rtype === 'promise') {
              return options => cap.nativePromise(pluginName, prop.toString(), options);
            } else {
              return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
            }
          } else if (impl) {
            return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
          }
        } else if (impl) {
          return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
        } else {
          throw new CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
        }
      };
      const createPluginMethodWrapper = prop => {
        let remove;
        const wrapper = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          const p = loadPluginImplementation().then(impl => {
            const fn = createPluginMethod(impl, prop);
            if (fn) {
              const p = fn(...args);
              remove = p === null || p === void 0 ? void 0 : p.remove;
              return p;
            } else {
              throw new CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
            }
          });
          if (prop === 'addListener') {
            p.remove = async () => remove();
          }
          return p;
        };
        // Some flair ✨
        wrapper.toString = () => "".concat(prop.toString(), "() { [capacitor code] }");
        Object.defineProperty(wrapper, 'name', {
          value: prop,
          writable: false,
          configurable: false
        });
        return wrapper;
      };
      const addListener = createPluginMethodWrapper('addListener');
      const removeListener = createPluginMethodWrapper('removeListener');
      const addListenerNative = (eventName, callback) => {
        const call = addListener({
          eventName
        }, callback);
        const remove = async () => {
          const callbackId = await call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        };
        const p = new Promise(resolve => call.then(() => resolve({
          remove
        })));
        p.remove = async () => {
          console.warn("Using addListener() without 'await' is deprecated.");
          await remove();
        };
        return p;
      };
      const proxy = new Proxy({}, {
        get(_, prop) {
          switch (prop) {
            // https://github.com/facebook/react/issues/20030
            case '$$typeof':
              return undefined;
            case 'toJSON':
              return () => ({});
            case 'addListener':
              return pluginHeader ? addListenerNative : addListener;
            case 'removeListener':
              return removeListener;
            default:
              return createPluginMethodWrapper(prop);
          }
        }
      });
      Plugins[pluginName] = proxy;
      registeredPlugins.set(pluginName, {
        name: pluginName,
        proxy,
        platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
      });
      return proxy;
    };
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
      cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    return cap;
  };
  const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);
  const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
  const registerPlugin = Capacitor.registerPlugin;

  /**
   * Base class web plugins should extend.
   */
  class WebPlugin {
    constructor() {
      this.listeners = {};
      this.retainedEventArguments = {};
      this.windowListeners = {};
    }
    addListener(eventName, listenerFunc) {
      let firstListener = false;
      const listeners = this.listeners[eventName];
      if (!listeners) {
        this.listeners[eventName] = [];
        firstListener = true;
      }
      this.listeners[eventName].push(listenerFunc);
      // If we haven't added a window listener for this event and it requires one,
      // go ahead and add it
      const windowListener = this.windowListeners[eventName];
      if (windowListener && !windowListener.registered) {
        this.addWindowListener(windowListener);
      }
      if (firstListener) {
        this.sendRetainedArgumentsForEvent(eventName);
      }
      const remove = async () => this.removeListener(eventName, listenerFunc);
      const p = Promise.resolve({
        remove
      });
      return p;
    }
    async removeAllListeners() {
      this.listeners = {};
      for (const listener in this.windowListeners) {
        this.removeWindowListener(this.windowListeners[listener]);
      }
      this.windowListeners = {};
    }
    notifyListeners(eventName, data, retainUntilConsumed) {
      const listeners = this.listeners[eventName];
      if (!listeners) {
        if (retainUntilConsumed) {
          let args = this.retainedEventArguments[eventName];
          if (!args) {
            args = [];
          }
          args.push(data);
          this.retainedEventArguments[eventName] = args;
        }
        return;
      }
      listeners.forEach(listener => listener(data));
    }
    hasListeners(eventName) {
      var _a;
      return !!((_a = this.listeners[eventName]) === null || _a === void 0 ? void 0 : _a.length);
    }
    registerWindowListener(windowEventName, pluginEventName) {
      this.windowListeners[pluginEventName] = {
        registered: false,
        windowEventName,
        pluginEventName,
        handler: event => {
          this.notifyListeners(pluginEventName, event);
        }
      };
    }
    unimplemented() {
      let msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
      return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable() {
      let msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
      return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
      const listeners = this.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      this.listeners[eventName].splice(index, 1);
      // If there are no more listeners for this type of event,
      // remove the window listener
      if (!this.listeners[eventName].length) {
        this.removeWindowListener(this.windowListeners[eventName]);
      }
    }
    addWindowListener(handle) {
      window.addEventListener(handle.windowEventName, handle.handler);
      handle.registered = true;
    }
    removeWindowListener(handle) {
      if (!handle) {
        return;
      }
      window.removeEventListener(handle.windowEventName, handle.handler);
      handle.registered = false;
    }
    sendRetainedArgumentsForEvent(eventName) {
      const args = this.retainedEventArguments[eventName];
      if (!args) {
        return;
      }
      delete this.retainedEventArguments[eventName];
      args.forEach(arg => {
        this.notifyListeners(eventName, arg);
      });
    }
  }
  /******** END WEB VIEW PLUGIN ********/
  /******** COOKIES PLUGIN ********/
  /**
   * Safely web encode a string value (inspired by js-cookie)
   * @param str The string value to encode
   */
  const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
  /**
   * Safely web decode a string value (inspired by js-cookie)
   * @param str The string value to decode
   */
  const decode = str => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  class CapacitorCookiesPluginWeb extends WebPlugin {
    async getCookies() {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(';').forEach(cookie => {
        if (cookie.length <= 0) return;
        // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="
        let _cookie$replace$split = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE'),
          _cookie$replace$split2 = _slicedToArray(_cookie$replace$split, 2),
          key = _cookie$replace$split2[0],
          value = _cookie$replace$split2[1];
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    }
    async setCookie(options) {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        // Clean & sanitize options
        const expires = options.expires ? "; expires=".concat(options.expires.replace('expires=', '')) : '';
        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"
        const domain = options.url != null && options.url.length > 0 ? "domain=".concat(options.url) : '';
        document.cookie = "".concat(encodedKey, "=").concat(encodedValue || '').concat(expires, "; path=").concat(path, "; ").concat(domain, ";");
      } catch (error) {
        return Promise.reject(error);
      }
    }
    async deleteCookie(options) {
      try {
        document.cookie = "".concat(options.key, "=; Max-Age=0");
      } catch (error) {
        return Promise.reject(error);
      }
    }
    async clearCookies() {
      try {
        const cookies = document.cookie.split(';') || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, "=;expires=".concat(new Date().toUTCString(), ";path=/"));
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    async clearAllCookies() {
      try {
        await this.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }
  registerPlugin('CapacitorCookies', {
    web: () => new CapacitorCookiesPluginWeb()
  });
  // UTILITY FUNCTIONS
  /**
   * Read in a Blob value and return it as a base64 string
   * @param blob The blob value to convert to a base64 string
   */
  const readBlobAsBase64 = async blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      // remove prefix "data:application/pdf;base64,"
      resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(blob);
  });
  /**
   * Normalize an HttpHeaders map by lowercasing all of the values
   * @param headers The HttpHeaders object to normalize
   */
  const normalizeHttpHeaders = function () {
    let headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const originalKeys = Object.keys(headers);
    const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
    const normalized = loweredKeys.reduce((acc, key, index) => {
      acc[key] = headers[originalKeys[index]];
      return acc;
    }, {});
    return normalized;
  };
  /**
   * Builds a string of url parameters that
   * @param params A map of url parameters
   * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
   */
  const buildUrlParams = function (params) {
    let shouldEncode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!params) return null;
    const output = Object.entries(params).reduce((accumulator, entry) => {
      const _entry = _slicedToArray(entry, 2),
        key = _entry[0],
        value = _entry[1];
      let encodedValue;
      let item;
      if (Array.isArray(value)) {
        item = '';
        value.forEach(str => {
          encodedValue = shouldEncode ? encodeURIComponent(str) : str;
          item += "".concat(key, "=").concat(encodedValue, "&");
        });
        // last character will always be "&" so slice it off
        item.slice(0, -1);
      } else {
        encodedValue = shouldEncode ? encodeURIComponent(value) : value;
        item = "".concat(key, "=").concat(encodedValue);
      }
      return "".concat(accumulator, "&").concat(item);
    }, '');
    // Remove initial "&" from the reduce
    return output.substr(1);
  };
  /**
   * Build the RequestInit object based on the options passed into the initial request
   * @param options The Http plugin options
   * @param extra Any extra RequestInit values
   */
  const buildRequestInit = function (options) {
    let extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const output = Object.assign({
      method: options.method || 'GET',
      headers: options.headers
    }, extra);
    // Get the content-type
    const headers = normalizeHttpHeaders(options.headers);
    const type = headers['content-type'] || '';
    // If body is already a string, then pass it through as-is.
    if (typeof options.data === 'string') {
      output.body = options.data;
    }
    // Build request initializers based off of content-type
    else if (type.includes('application/x-www-form-urlencoded')) {
      const params = new URLSearchParams();
      for (const _ref of Object.entries(options.data || {})) {
        var _ref2 = _slicedToArray(_ref, 2);
        const key = _ref2[0];
        const value = _ref2[1];
        params.set(key, value);
      }
      output.body = params.toString();
    } else if (type.includes('multipart/form-data') || options.data instanceof FormData) {
      const form = new FormData();
      if (options.data instanceof FormData) {
        options.data.forEach((value, key) => {
          form.append(key, value);
        });
      } else {
        for (const key of Object.keys(options.data)) {
          form.append(key, options.data[key]);
        }
      }
      output.body = form;
      const headers = new Headers(output.headers);
      headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
      output.headers = headers;
    } else if (type.includes('application/json') || typeof options.data === 'object') {
      output.body = JSON.stringify(options.data);
    }
    return output;
  };
  // WEB IMPLEMENTATION
  class CapacitorHttpPluginWeb extends WebPlugin {
    /**
     * Perform an Http request given a set of options
     * @param options Options to build the HTTP request
     */
    async request(options) {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? "".concat(options.url, "?").concat(urlParams) : options.url;
      const response = await fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || '';
      // Default to 'text' responseType so no parsing happens
      let _ref3 = response.ok ? options : {},
        _ref3$responseType = _ref3.responseType,
        responseType = _ref3$responseType === void 0 ? 'text' : _ref3$responseType;
      // If the response content-type is json, force the response to be json
      if (contentType.includes('application/json')) {
        responseType = 'json';
      }
      let data;
      let blob;
      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = await response.blob();
          data = await readBlobAsBase64(blob);
          break;
        case 'json':
          data = await response.json();
          break;
        case 'document':
        case 'text':
        default:
          data = await response.text();
      }
      // Convert fetch headers to Capacitor HttpHeaders
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    }
    /**
     * Perform an Http GET request given a set of options
     * @param options Options to build the HTTP request
     */
    async get(options) {
      return this.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    }
    /**
     * Perform an Http POST request given a set of options
     * @param options Options to build the HTTP request
     */
    async post(options) {
      return this.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    }
    /**
     * Perform an Http PUT request given a set of options
     * @param options Options to build the HTTP request
     */
    async put(options) {
      return this.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    }
    /**
     * Perform an Http PATCH request given a set of options
     * @param options Options to build the HTTP request
     */
    async patch(options) {
      return this.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    }
    /**
     * Perform an Http DELETE request given a set of options
     * @param options Options to build the HTTP request
     */
    async delete(options) {
      return this.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    }
  }
  registerPlugin('CapacitorHttp', {
    web: () => new CapacitorHttpPluginWeb()
  });
  /******** END HTTP PLUGIN ********/
  /******** SYSTEM BARS PLUGIN ********/
  /**
   * Available status bar styles.
   */
  var SystemBarsStyle;
  (function (SystemBarsStyle) {
    /**
     * Light system bar content on a dark background.
     *
     * @since 8.0.0
     */
    SystemBarsStyle["Dark"] = "DARK";
    /**
     * For dark system bar content on a light background.
     *
     * @since 8.0.0
     */
    SystemBarsStyle["Light"] = "LIGHT";
    /**
     * The style is based on the device appearance or the underlying content.
     * If the device is using Dark mode, the system bars content will be light.
     * If the device is using Light mode, the system bars content will be dark.
     *
     * @since 8.0.0
     */
    SystemBarsStyle["Default"] = "DEFAULT";
  })(SystemBarsStyle || (SystemBarsStyle = {}));
  /**
   * Available system bar types.
   */
  var SystemBarType;
  (function (SystemBarType) {
    /**
     * The top status bar on both Android and iOS.
     *
     * @since 8.0.0
     */
    SystemBarType["StatusBar"] = "StatusBar";
    /**
     * The navigation bar (or gesture bar on iOS) on both Android and iOS.
     *
     * @since 8.0.0
     */
    SystemBarType["NavigationBar"] = "NavigationBar";
  })(SystemBarType || (SystemBarType = {}));
  class SystemBarsPluginWeb extends WebPlugin {
    async setStyle() {
      this.unavailable('not available for web');
    }
    async setAnimation() {
      this.unavailable('not available for web');
    }
    async show() {
      this.unavailable('not available for web');
    }
    async hide() {
      this.unavailable('not available for web');
    }
  }
  registerPlugin('SystemBars', {
    web: () => new SystemBarsPluginWeb()
  });

  const App = registerPlugin('App', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppWeb())
  });

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    App: App
  });

  class AppWeb extends WebPlugin {
    constructor() {
      super();
      this.handleVisibilityChange = () => {
        const data = {
          isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
        if (document.hidden) {
          this.notifyListeners('pause', null);
        } else {
          this.notifyListeners('resume', null);
        }
      };
      document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
    }
    exitApp() {
      throw this.unimplemented('Not implemented on web.');
    }
    async getInfo() {
      throw this.unimplemented('Not implemented on web.');
    }
    async getLaunchUrl() {
      return {
        url: ''
      };
    }
    async getState() {
      return {
        isActive: document.hidden !== true
      };
    }
    async minimizeApp() {
      throw this.unimplemented('Not implemented on web.');
    }
    async toggleBackButtonHandler() {
      throw this.unimplemented('Not implemented on web.');
    }
    async getAppLanguage() {
      return {
        value: navigator.language.split('-')[0].toLowerCase()
      };
    }
  }

  var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppWeb: AppWeb
  });

  return index$1;

})();
//# sourceMappingURL=appBundle.js.map
