// Talking to somebody.
//
// A name and a line at the bottom of the screen, and a prompt telling
// you how to hear the rest. It stays out of the way of everything else:
// the hearts, the stamina wheel and the map all keep working while
// somebody is talking to you, because a conversation in this game is a
// few seconds long and stopping the world for it would be worse than
// the conversation.
import { strings } from './strings.js';

export function createDialogue() {
  const root = document.createElement('div');
  root.id = 'dialogue';
  root.hidden = true;
  root.innerHTML = `
    <div class="dialogue__box">
      <div class="dialogue__who" data-who></div>
      <p class="dialogue__line" data-line></p>
      <div class="dialogue__hint">${strings.dialogue.more}</div>
    </div>
  `;
  document.body.appendChild(root);
  const whoEl = root.querySelector('[data-who]');
  const lineEl = root.querySelector('[data-line]');

  let open = false;
  let person = null;

  return {
    get isOpen() { return open; },
    /** Who is being talked to, or null. */
    get person() { return person; },

    /**
     * Say the next thing this person has to say.
     * @returns {boolean} true if there was something left to say.
     */
    next(who) {
      if (person !== who) {
        person = who;
        who.said = 0;
      }
      if (who.said >= who.lines.length) {
        this.close();
        return false;
      }
      whoEl.textContent = who.name;
      lineEl.textContent = who.lines[who.said];
      who.said += 1;
      open = true;
      root.hidden = false;
      return true;
    },

    close() {
      // Next time they are spoken to they start again from the top,
      // which is what anybody would expect of someone in the street.
      if (person) person.said = 0;
      person = null;
      open = false;
      root.hidden = true;
    },
  };
}
