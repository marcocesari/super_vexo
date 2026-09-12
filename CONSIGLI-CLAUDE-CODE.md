# Consigli per usare meglio Claude Code

Ciao Marco. Ho letto tutte le sessioni di lavoro su Super Vexo (dal 18 agosto al 9 settembre:
97 tuoi messaggi, 3.887 miei, 2.178 comandi eseguiti) e ho trovato cinque cose che puoi
migliorare.

Prima la cosa importante: **il codice e il modo in cui lavoriamo insieme funzionano bene.**
Su 2.178 comandi solo 57 hanno dato errore (il 2,6%) e nessuna modifica ai file è mai fallita.
I consigli qui sotto non riguardano il gioco, che va benissimo. Riguardano come *imposti* le
sessioni: piccoli cambiamenti che ti fanno andare più veloce e consumare molto meno.

---

## 1. Chiudi la sessione quando cambi argomento ⭐ il più importante

Una tua sessione è rimasta aperta **14 giorni di fila**, dal 21 agosto al 3 settembre, con
dentro pause anche di 50 ore. Da sola vale circa **tre quarti** di tutto quello che hai
consumato sul progetto.

Perché succede: ogni volta che ti rispondo, io rileggo *tutta* la conversazione dall'inizio.
Non è come un messaggio in chat, che parte da solo. È come se ogni volta rileggessi da capo
tutto il quaderno per scrivere una riga nuova. Più il quaderno è lungo, più ogni riga costa.

In quella sessione la mia risposta media pesava **517.000 parole-token**, contro le 147.000
di una sessione corta. Il tuo ultimo messaggio del 3 settembre è costato circa **3 volte e
mezzo** il primo del 21 agosto, per lo stesso identico tipo di lavoro.

Nella stessa sessione sei passato dai capelli del personaggio, allo zoom della mappa, ai
vestiti dei passanti. Sono lavori diversi: non hanno bisogno di ricordarsi l'uno dell'altro.

**Cosa fare:** quando cambi argomento, scrivi `/clear` (svuota la memoria, resti nella stessa
finestra) oppure chiudi e riapri Claude Code.

Una sessione = un lavoro. Non una sessione = un progetto.

## 2. Comincia in plan mode, poi passa in auto mode

Questo è il ritmo che ti conviene tenere in ogni sessione. Sono due modalità diverse e si
cambia con **Shift+Tab** (premi più volte, la modalità attiva è scritta in basso).

**All'inizio: plan mode.** In plan mode io posso leggere il codice e ragionare, ma **non posso
modificare niente**. Ti spiego cosa ho capito e come voglio procedere, e tu approvi o correggi.
Costa trenta secondi e ti fa evitare la cosa che ti è capitata più volte: io che parto convinto
in una direzione e faccio **fino a 234 mosse di fila** prima che tu mi fermi. Correggere un
piano di cinque righe è facilissimo; correggere il lavoro già fatto no.

Serve soprattutto quando il lavoro tocca più file o non sai ancora bene tu stesso come farlo.
Per un bug piccolo e chiaro puoi saltarlo.

**Dopo che hai approvato: auto mode.** Qui eseguo il piano senza fermarmi a chiederti il
permesso ad ogni comando. È la modalità in cui hai lavorato quasi sempre (299 volte su 308) ed
è quella giusta — ma è giusta *dopo* che ci siamo messi d'accordo, non prima.

Il senso è questo: **decidi tu la direzione, la velocità la metto io.** In plan mode all'inizio
scegli la strada, in auto mode dopo io corro senza interromperti ogni due minuti.

Una cosa collegata: non hai mai usato i **subagenti** (0 volte su 2.178 comandi). Il progetto
ha 65 file e 17.000 righe; quando devo aprirne dieci solo per capire dove mettere le mani,
quei dieci file restano nel quaderno per sempre. Un subagente li legge al posto mio in una
stanza a parte e mi riporta solo la risposta, così il quaderno resta corto. Basta che me lo
chiedi — "usa un subagente per cercare" — oppure lascialo decidere a me.

## 3. Dimmi come si capisce che ho finito

I tuoi messaggi sono corti: in media 111 caratteri, quasi metà sotto i 100. Va benissimo, non
devi scrivere temi. Ma succede spesso questo: messaggio corto → io parto e faccio **fino a 234
mosse di fila** senza sentirti → tu mi fermi perché sono fuori strada. È capitato 9 volte.

Il pezzo che manca quasi sempre è **come si verifica che funziona**. Confronta:

> ❌ «Non funziona niente, quando muovo il joystick su e giù non succede nulla, guarda online
>    e prendi ispirazione da TotK»

> ✅ «Lo zoom della mappa non risponde al joystick. Deve cambiare la distanza della camera:
>    controlla con uno screenshot prima e dopo che sia davvero cambiata»

Il secondo non è più lungo. Ma mi dà un traguardo, e così **mi fermo da solo** quando ci sono
arrivato, invece di continuare a provare cose a caso.

## 4. Lancia Claude Code dalla cartella del gioco

Ho scritto `cd /Users/marco/code/super_vexo` **655 volte**. Succede perché apri Claude Code da
`/Users/marco`, quindi ogni singolo comando deve prima spostarsi qui.

**Cosa fare:** apri il Terminale, scrivi `cd ~/code/super_vexo` e *poi* lancia `claude`. Da
quel momento sono già nella cartella giusta.

## 5. Chiudi ogni sessione con un commit e una release

Questo lo fai già, e lo fai bene: **46 commit** dal 18 agosto, con messaggi che si capiscono
davvero — *"Fix the lag while flying: it was the monster camps"*, *"Weld the hair to his head"*.
Chi legge la lista dei commit capisce come è cresciuto il gioco. Continua così.

Quello che manca è usare il commit come **fine della sessione**. Guarda i tre commit del
5 settembre:

```
c244d9b  Teach the game odd controllers, and grow things on the world
3e99dcf  something 2
2b88244  something
```

Gli ultimi due si chiamano "something" perché in quel momento non c'era una risposta alla
domanda *"cosa ho fatto in questa sessione?"*. Non è pigrizia nello scrivere il messaggio: è
il segno che la sessione non aveva uno scopo preciso. Quando ce l'ha, il messaggio di commit
si scrive da solo — è lo scopo, al passato.

E in questo momento hai **13 file modificati non ancora committati**, fermi dal 5 settembre.
Sono giorni di lavoro che esistono solo sul tuo Mac: non sono su GitHub, e non sono nel gioco
che gira sul telefono.

**La regola:** ogni sessione ha uno scopo — una feature, un bug, una cosa sola. Quando lo
scopo è raggiunto, la sessione finisce così:

```
npm run build        # ricostruisce il gioco dentro docs/
git add -A
git commit -m "..."  # lo scopo della sessione, al passato
git push
```

Il `build` è il passo che spesso salta ed è quello che conta di più: GitHub Pages pubblica
quello che c'è in `docs/`, non quello che c'è in `src/`. Se fai commit senza build, il codice
è salvato ma **il gioco online resta quello vecchio** — e poi passi mezz'ora a chiederti perché
sul telefono non cambia niente. (È già successo: c'è scritto nel `vite.config.js`, dove hai
messo la data di build sulla schermata del titolo apposta per accorgertene.)

Puoi anche lanciare gli smoke test prima del commit, ne hai **26** in `package.json`: prova
`npm run smoke` e quello del pezzo che hai toccato, tipo `npm run smoke:map`.

Nota come questo si incastra con il punto 1: **commit fatto = sessione finita = `/clear`.**
Il commit è il segnale che è ora di ripartire puliti. E ogni push è una release nuova del
gioco, giocabile davvero.

## 6. Manca il CLAUDE.md

Hai scritto **3.278 righe** di documentazione: `README.md`, `journal.md` (1.626 righe!),
`LEARNINGS.md`, `BRIDGE.md`, `program.md`, `BACKLOG.md`. Ottimo lavoro — ma io non le leggo
mai, perché non so che ci sono.

`CLAUDE.md` è l'unico file che leggo **sempre e da solo**, all'inizio di ogni sessione. Ne
bastano 30-40 righe: com'è organizzata `src/`, come si lancia e si prova il gioco, e quale di
quei file guardare per cosa. Da lì in poi arrivo già sapendo come funziona Super Vexo, invece
di riscoprirlo ogni volta.

---

# Come sistemare tutto questo

Non devi fare niente a mano. Apri Claude Code **dentro la cartella del gioco**:

```
cd ~/code/super_vexo
claude
```

e poi scrivi:

```
Leggi CONSIGLI-CLAUDE-CODE.md e aiutami a sistemare i punti della checklist qui sotto,
uno alla volta. Alla fine verifica che sia tutto a posto.
```

Io leggo questo file, vedo cosa c'è da fare, lo faccio e poi controllo che funzioni davvero.
Tu mi dici solo sì o no quando ti chiedo conferma.

Una cosa l'ho già sistemata io: il file `.claude/settings.local.json`, quello che decide quali
comandi posso eseguire senza chiederti il permesso, era arrivato a **101 regole**. Quasi tutte
erano usa-e-getta di lavori finiti da settimane (`node __hairmove.mjs`, `node __boko.mjs`,
`node __eye.mjs`) e indirizzi di cartelle temporanee che non esistono più: ogni scriptino di
prova aveva lasciato la sua riga. Le ho sostituite con **32 regole generali** che coprono le
stesse cose — `node`, `npm`, `git`, `python3` e compagnia. Cancellare file resta fuori: se devo
cancellare qualcosa te lo chiedo, come prima.

## Checklist

- [ ] **Scrivere `CLAUDE.md`** — leggendo `README.md`, `LEARNINGS.md` e `program.md`, 30-40 righe
- [ ] **Chiudere il lavoro rimasto aperto** — i 13 file modificati dal 5 settembre: capire cosa
      sono, poi build + commit + push, così tornano in pari
- [ ] **Verificare** che il gioco parta e che la versione online sia aggiornata

Gli altri punti non si sistemano nel codice: sono abitudini tue, e funzionano solo se le usi.
Le quattro che contano, in ordine:

1. `/clear` quando cambi argomento
2. Build + commit + push alla fine di ogni sessione
3. Plan mode all'inizio, auto mode dopo aver approvato
4. Dire come si verifica che una cosa funziona
5. Lanciare `claude` da dentro `~/code/super_vexo`

Le prime due sono la stessa abitudine vista da due lati: **una sessione, uno scopo, un commit.**
Messe insieme alla terza, ogni sessione prende una forma sola e sempre uguale:

> **plan mode → approvi → auto mode → build, commit, push → `/clear`**

Se prendi solo questa da tutto il file, hai già preso la parte che conta.
