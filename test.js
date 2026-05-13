/************* 
 * Test Test *
 *************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'test';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
const practice_setLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_setLoopBegin(practice_setLoopScheduler));
flowScheduler.add(practice_setLoopScheduler);
flowScheduler.add(practice_setLoopEnd);
const rest_setLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(rest_setLoopBegin(rest_setLoopScheduler));
flowScheduler.add(rest_setLoopScheduler);
flowScheduler.add(rest_setLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'pra_con.xlsx', 'path': 'pra_con.xlsx'},
    {'name': 'test_trials.xlsx', 'path': 'test_trials.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var introClock;
var intro_text;
var intro_key_resp;
var pra_randomtimeClock;
var pra_randomtime_text;
var practiceClock;
var pra_fixation;
var practice_stimuli;
var practice_key_resp;
var feedbackClock;
var feedback_msg;
var trial_randomtimeClock;
var trial_randomtime_text;
var trialClock;
var trial_fixation;
var trials_stimuli;
var trials_key_resp;
var restClock;
var text_rest;
var key_resp_rest;
var endClock;
var end_text;
var end_key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: '感谢您参与本次实验！\n请在单词呈现后迅速判断：\n判断为日语中存在的“真词”，请按【f键】；\n判断为不存在的“假词”，请按【j键】；\n如果一定时间内没有按键，将自动跳到下一题。\n前10个练习试次将在做出判断后会反馈回答是否正确；\n第11个试次起将没有反馈。\n每80个单词为1组，共有4组。\n为保证您不会因为长时间测试而感到疲劳，\n请在每组测试间稍作休息，调整状态。\n以上，确认完毕后请按【空格键】进入实验。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  intro_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pra_randomtime"
  pra_randomtimeClock = new util.Clock();
  pra_randomtime_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pra_randomtime_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  pra_fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'pra_fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  practice_stimuli = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_stimuli',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  practice_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_msg = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_msg',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial_randomtime"
  trial_randomtimeClock = new util.Clock();
  trial_randomtime_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_randomtime_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trial_fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  trials_stimuli = new visual.TextStim({
    win: psychoJS.window,
    name: 'trials_stimuli',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  trials_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  text_rest = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_rest',
    text: '请稍作休息，调整状态。\n做好准备后，请按【空格键】继续实验。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_rest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '感谢您参与本次实验！请按空格键退出程序。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _intro_key_resp_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_key_resp.keys = undefined;
    intro_key_resp.rt = undefined;
    _intro_key_resp_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(intro_text);
    introComponents.push(intro_key_resp);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'intro'-------
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text* updates
    if (t >= 0.0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }

    
    // *intro_key_resp* updates
    if (t >= 0.0 && intro_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_key_resp.tStart = t;  // (not accounting for frame time here)
      intro_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { intro_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { intro_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { intro_key_resp.clearEvents(); });
    }

    if (intro_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = intro_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _intro_key_resp_allKeys = _intro_key_resp_allKeys.concat(theseKeys);
      if (_intro_key_resp_allKeys.length > 0) {
        intro_key_resp.keys = _intro_key_resp_allKeys[_intro_key_resp_allKeys.length - 1].name;  // just the last key pressed
        intro_key_resp.rt = _intro_key_resp_allKeys[_intro_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd() {
  return async function () {
    //------Ending Routine 'intro'-------
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro_key_resp.keys', intro_key_resp.keys);
    if (typeof intro_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('intro_key_resp.rt', intro_key_resp.rt);
        routineTimer.reset();
        }
    
    intro_key_resp.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_set;
var currentLoop;
function practice_setLoopBegin(practice_setLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_set = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pra_con.xlsx',
      seed: undefined, name: 'practice_set'
    });
    psychoJS.experiment.addLoop(practice_set); // add the loop to the experiment
    currentLoop = practice_set;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_set of practice_set) {
      const snapshot = practice_set.getSnapshot();
      practice_setLoopScheduler.add(importConditions(snapshot));
      practice_setLoopScheduler.add(pra_randomtimeRoutineBegin(snapshot));
      practice_setLoopScheduler.add(pra_randomtimeRoutineEachFrame());
      practice_setLoopScheduler.add(pra_randomtimeRoutineEnd());
      practice_setLoopScheduler.add(practiceRoutineBegin(snapshot));
      practice_setLoopScheduler.add(practiceRoutineEachFrame());
      practice_setLoopScheduler.add(practiceRoutineEnd());
      practice_setLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practice_setLoopScheduler.add(feedbackRoutineEachFrame());
      practice_setLoopScheduler.add(feedbackRoutineEnd());
      practice_setLoopScheduler.add(endLoopIteration(practice_setLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_setLoopEnd() {
  psychoJS.experiment.removeLoop(practice_set);

  return Scheduler.Event.NEXT;
}


var rest_set;
function rest_setLoopBegin(rest_setLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    rest_set = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'test_trials.xlsx',
      seed: undefined, name: 'rest_set'
    });
    psychoJS.experiment.addLoop(rest_set); // add the loop to the experiment
    currentLoop = rest_set;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRest_set of rest_set) {
      const snapshot = rest_set.getSnapshot();
      rest_setLoopScheduler.add(importConditions(snapshot));
      rest_setLoopScheduler.add(trial_randomtimeRoutineBegin(snapshot));
      rest_setLoopScheduler.add(trial_randomtimeRoutineEachFrame());
      rest_setLoopScheduler.add(trial_randomtimeRoutineEnd());
      rest_setLoopScheduler.add(trialRoutineBegin(snapshot));
      rest_setLoopScheduler.add(trialRoutineEachFrame());
      rest_setLoopScheduler.add(trialRoutineEnd());
      rest_setLoopScheduler.add(restRoutineBegin(snapshot));
      rest_setLoopScheduler.add(restRoutineEachFrame());
      rest_setLoopScheduler.add(restRoutineEnd());
      rest_setLoopScheduler.add(endLoopIteration(rest_setLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function rest_setLoopEnd() {
  psychoJS.experiment.removeLoop(rest_set);

  return Scheduler.Event.NEXT;
}


var pra_randomtimeComponents;
function pra_randomtimeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pra_randomtime'-------
    t = 0;
    pra_randomtimeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    pra_randomtimeComponents = [];
    pra_randomtimeComponents.push(pra_randomtime_text);
    
    for (const thisComponent of pra_randomtimeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function pra_randomtimeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pra_randomtime'-------
    // get current time
    t = pra_randomtimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pra_randomtime_text* updates
    if (t >= 0.0 && pra_randomtime_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pra_randomtime_text.tStart = t;  // (not accounting for frame time here)
      pra_randomtime_text.frameNStart = frameN;  // exact frame index
      
      pra_randomtime_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + (0.5 + ((Math.random() * 3) / 10)) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pra_randomtime_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pra_randomtime_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pra_randomtimeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pra_randomtimeRoutineEnd() {
  return async function () {
    //------Ending Routine 'pra_randomtime'-------
    for (const thisComponent of pra_randomtimeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "pra_randomtime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _practice_key_resp_allKeys;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.500000);
    // update component parameters for each repeat
    practice_stimuli.setText(stimuli);
    practice_key_resp.keys = undefined;
    practice_key_resp.rt = undefined;
    _practice_key_resp_allKeys = [];
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(pra_fixation);
    practiceComponents.push(practice_stimuli);
    practiceComponents.push(practice_key_resp);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice'-------
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pra_fixation* updates
    if (t >= 0.0 && pra_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pra_fixation.tStart = t;  // (not accounting for frame time here)
      pra_fixation.frameNStart = frameN;  // exact frame index
      
      pra_fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pra_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pra_fixation.setAutoDraw(false);
    }
    
    // *practice_stimuli* updates
    if (t >= 0.5 && practice_stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_stimuli.tStart = t;  // (not accounting for frame time here)
      practice_stimuli.frameNStart = frameN;  // exact frame index
      
      practice_stimuli.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_stimuli.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_stimuli.setAutoDraw(false);
    }
    
    // *practice_key_resp* updates
    if (t >= 0.5 && practice_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_key_resp.tStart = t;  // (not accounting for frame time here)
      practice_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_key_resp.clearEvents(); });
    }

    frameRemains = 0.5 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (practice_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_key_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _practice_key_resp_allKeys = _practice_key_resp_allKeys.concat(theseKeys);
      if (_practice_key_resp_allKeys.length > 0) {
        practice_key_resp.keys = _practice_key_resp_allKeys[_practice_key_resp_allKeys.length - 1].name;  // just the last key pressed
        practice_key_resp.rt = _practice_key_resp_allKeys[_practice_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (practice_key_resp.keys == correct) {
            practice_key_resp.corr = 1;
        } else {
            practice_key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var feedback_text;
var feedback_color;
function practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice'-------
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (practice_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         practice_key_resp.corr = 1;  // correct non-response
      } else {
         practice_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('practice_key_resp.keys', practice_key_resp.keys);
    psychoJS.experiment.addData('practice_key_resp.corr', practice_key_resp.corr);
    if (typeof practice_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_key_resp.rt', practice_key_resp.rt);
        routineTimer.reset();
        }
    
    practice_key_resp.stop();
    if ((practice_key_resp.keys === null)) {
        feedback_text = "\u672a\u53cd\u5e94";
        feedback_color = "yellow";
    } else {
        if (practice_key_resp.corr) {
            feedback_text = "\u6b63\u786e";
            feedback_color = "green";
        } else {
            feedback_text = "\u9519\u8bef";
            feedback_color = "red";
        }
    }
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    feedback_msg.setColor(new util.Color(feedback_color));
    feedback_msg.setText(feedback_text);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_msg);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_msg* updates
    if (t >= 0.0 && feedback_msg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_msg.tStart = t;  // (not accounting for frame time here)
      feedback_msg.frameNStart = frameN;  // exact frame index
      
      feedback_msg.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_msg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_msg.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trial_randomtimeComponents;
function trial_randomtimeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial_randomtime'-------
    t = 0;
    trial_randomtimeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    trial_randomtimeComponents = [];
    trial_randomtimeComponents.push(trial_randomtime_text);
    
    for (const thisComponent of trial_randomtimeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_randomtimeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial_randomtime'-------
    // get current time
    t = trial_randomtimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_randomtime_text* updates
    if (t >= 0.0 && trial_randomtime_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_randomtime_text.tStart = t;  // (not accounting for frame time here)
      trial_randomtime_text.frameNStart = frameN;  // exact frame index
      
      trial_randomtime_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + (0.5 + ((Math.random() * 3) / 10)) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial_randomtime_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_randomtime_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_randomtimeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_randomtimeRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial_randomtime'-------
    for (const thisComponent of trial_randomtimeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "trial_randomtime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _trials_key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.500000);
    // update component parameters for each repeat
    trials_stimuli.setText(stimuli);
    trials_key_resp.keys = undefined;
    trials_key_resp.rt = undefined;
    _trials_key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_fixation);
    trialComponents.push(trials_stimuli);
    trialComponents.push(trials_key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_fixation* updates
    if (t >= 0 && trial_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_fixation.tStart = t;  // (not accounting for frame time here)
      trial_fixation.frameNStart = frameN;  // exact frame index
      
      trial_fixation.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trial_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_fixation.setAutoDraw(false);
    }
    
    // *trials_stimuli* updates
    if (t >= 0.5 && trials_stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trials_stimuli.tStart = t;  // (not accounting for frame time here)
      trials_stimuli.frameNStart = frameN;  // exact frame index
      
      trials_stimuli.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trials_stimuli.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trials_stimuli.setAutoDraw(false);
    }
    
    // *trials_key_resp* updates
    if (t >= 0.5 && trials_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trials_key_resp.tStart = t;  // (not accounting for frame time here)
      trials_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trials_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trials_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trials_key_resp.clearEvents(); });
    }

    frameRemains = 0.5 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trials_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trials_key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (trials_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = trials_key_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _trials_key_resp_allKeys = _trials_key_resp_allKeys.concat(theseKeys);
      if (_trials_key_resp_allKeys.length > 0) {
        trials_key_resp.keys = _trials_key_resp_allKeys[_trials_key_resp_allKeys.length - 1].name;  // just the last key pressed
        trials_key_resp.rt = _trials_key_resp_allKeys[_trials_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (trials_key_resp.keys == correct) {
            trials_key_resp.corr = 1;
        } else {
            trials_key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (trials_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         trials_key_resp.corr = 1;  // correct non-response
      } else {
         trials_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('trials_key_resp.keys', trials_key_resp.keys);
    psychoJS.experiment.addData('trials_key_resp.corr', trials_key_resp.corr);
    if (typeof trials_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trials_key_resp.rt', trials_key_resp.rt);
        routineTimer.reset();
        }
    
    trials_key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_rest_allKeys;
var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'rest'-------
    t = 0;
    restClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((((rest_set.thisN + 1) % 80) !== 0)) {
        continueRoutine = false;
    }
    
    key_resp_rest.keys = undefined;
    key_resp_rest.rt = undefined;
    _key_resp_rest_allKeys = [];
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(text_rest);
    restComponents.push(key_resp_rest);
    
    for (const thisComponent of restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function restRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'rest'-------
    // get current time
    t = restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_rest* updates
    if (t >= 0.0 && text_rest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_rest.tStart = t;  // (not accounting for frame time here)
      text_rest.frameNStart = frameN;  // exact frame index
      
      text_rest.setAutoDraw(true);
    }

    
    // *key_resp_rest* updates
    if (t >= 0.0 && key_resp_rest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_rest.tStart = t;  // (not accounting for frame time here)
      key_resp_rest.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_rest.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_rest.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_rest.clearEvents(); });
    }

    if (key_resp_rest.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_rest.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_rest_allKeys = _key_resp_rest_allKeys.concat(theseKeys);
      if (_key_resp_rest_allKeys.length > 0) {
        key_resp_rest.keys = _key_resp_rest_allKeys[_key_resp_rest_allKeys.length - 1].name;  // just the last key pressed
        key_resp_rest.rt = _key_resp_rest_allKeys[_key_resp_rest_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restRoutineEnd() {
  return async function () {
    //------Ending Routine 'rest'-------
    for (const thisComponent of restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_rest.keys', key_resp_rest.keys);
    if (typeof key_resp_rest.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_rest.rt', key_resp_rest.rt);
        routineTimer.reset();
        }
    
    key_resp_rest.stop();
    // the Routine "rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _end_key_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_key_resp.keys = undefined;
    end_key_resp.rt = undefined;
    _end_key_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_key_resp);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *end_key_resp* updates
    if (t >= 0.0 && end_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key_resp.tStart = t;  // (not accounting for frame time here)
      end_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key_resp.clearEvents(); });
    }

    if (end_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_key_resp_allKeys = _end_key_resp_allKeys.concat(theseKeys);
      if (_end_key_resp_allKeys.length > 0) {
        end_key_resp.keys = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].name;  // just the last key pressed
        end_key_resp.rt = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd() {
  return async function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_key_resp.keys', end_key_resp.keys);
    if (typeof end_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_key_resp.rt', end_key_resp.rt);
        routineTimer.reset();
        }
    
    end_key_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
