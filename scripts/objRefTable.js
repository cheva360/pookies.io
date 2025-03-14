const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Camera3D,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Behaviors.Tween,
		C3.Behaviors.Physics,
		C3.Behaviors.Timer,
		C3.Plugins.Shape3D,
		C3.Plugins.TiledBg,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.Arr,
		C3.Behaviors.custom,
		C3.Behaviors.LOS,
		C3.Behaviors.Pathfinding,
		C3.Plugins.Tilemap,
		C3.Plugins.Browser,
		C3.Plugins.Mikal_3DObject,
		C3.Behaviors.Car,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.video,
		C3.Plugins.sliderbar,
		C3.Plugins.Mikal_3DFaceLight,
		C3.Plugins.Audio,
		C3.Behaviors.MoveTo,
		C3.Plugins.progressbar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.ZElevation,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.SetZElevation,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Behaviors.Physics.Acts.SetWorldGravity,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Shape3D.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Shape3D.Acts.SetInstanceVar,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Plugins.Shape3D.Exps.ZHeight,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Shape3D.Cnds.CompareInstanceVar,
		C3.Plugins.Shape3D.Cnds.PickInstVarHiLow,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Shape3D.Exps.UID,
		C3.Plugins.Shape3D.Cnds.CompareZElevation,
		C3.Plugins.Shape3D.Cnds.PickTopBottom,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Shape3D.Cnds.PickByUID,
		C3.Behaviors.Physics.Acts.SetEnabled,
		C3.Plugins.Shape3D.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Audio.Acts.SetPlaybackRate,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.Stop,
		C3.Behaviors.Physics.Acts.ApplyForceAtAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Behaviors.Timer.Cnds.IsTimerRunning,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Mikal_3DObject.Acts.SetVisible,
		C3.Plugins.Shape3D.Acts.SetVisible,
		C3.Plugins.System.Acts.SetLayerEffectEnabled,
		C3.Plugins.video.Acts.SetLooping,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Mikal_3DObject.Acts.MoveToLayer,
		C3.Plugins.Shape3D.Acts.SetPos,
		C3.Plugins.Shape3D.Acts.SetAngle,
		C3.Plugins.System.Acts.SetLayerEffectParam,
		C3.Plugins.sliderbar.Exps.Value,
		C3.Plugins.Shape3D.Acts.SetSize,
		C3.Plugins.Shape3D.Acts.SetTowardPosition,
		C3.Plugins.Shape3D.Acts.SetFaceObject,
		C3.Plugins.Mouse.Cnds.OnMovement,
		C3.Plugins.Mouse.Acts.RequestPointerLock,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.Mouse.Acts.ReleasePointerLock,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.sliderbar.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Audio.Acts.FadeVolume,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.Shape3D.Acts.ToggleBoolInstanceVar,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Behaviors.Car.Acts.SimulateControl,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Plugins.Camera3D.Exps.CameraYRotation,
		C3.Plugins.Camera3D.Acts.LookAtPosition,
		C3.Plugins.Shape3D.Exps.X,
		C3.Plugins.Shape3D.Exps.Y,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.Car.Acts.Stop,
		C3.Plugins.Shape3D.Exps.Angle,
		C3.Plugins.Mikal_3DObject.Acts.SetRotationOrdered,
		C3.Plugins.Mikal_3DObject.Acts.SetPos,
		C3.Plugins.Mouse.Cnds.HasPointerLock,
		C3.Plugins.Mouse.Exps.MovementX,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.Mouse.Exps.MovementY,
		C3.Plugins.Camera3D.Acts.RotateCamera,
		C3.Plugins.Camera3D.Exps.CameraXRotation,
		C3.Plugins.Camera3D.Acts.SetPosition,
		C3.Plugins.Mikal_3DObject.Acts.SetZElevation,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Mikal_3DObject.Exps.ZElevation,
		C3.Plugins.Shape3D.Cnds.IsOverlapping,
		C3.Plugins.Shape3D.Acts.SetZElevation,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.fps,
		C3.Plugins.Shape3D.Acts.Destroy,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.progressbar.Acts.SetVisible,
		C3.Plugins.progressbar.Acts.SetProgress,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Shape3D.Cnds.PickDistance,
		C3.Plugins.Shape3D.Cnds.OnDestroyed,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.Mikal_3DObject.Acts.Destroy,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.progressbar.Exps.Progress,
		C3.Plugins.Shape3D.Acts.SetPosToObject,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Behaviors.Pathfinding.Acts.FindPath,
		C3.Behaviors.Pathfinding.Cnds.OnPathFound,
		C3.Behaviors.Pathfinding.Acts.StartMoving,
		C3.Behaviors.Pathfinding.Acts.Stop,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Behaviors.Pathfinding.Acts.AddObstacle,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.LOS.Acts.AddObstacle,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Behaviors.custom.Acts.Stop,
		C3.Behaviors.Pathfinding.Acts.SetEnabled,
		C3.Behaviors.custom.Acts.SetEnabled,
		C3.Behaviors.Timer.Acts.StopTimer,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Behaviors.custom.Acts.AccelerateAngle,
		C3.Plugins.Shape3D.Acts.RotateTowardAngle,
		C3.Behaviors.custom.Cnds.CompareSpeed,
		C3.Behaviors.custom.Acts.SetSpeed,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.Behaviors.Pathfinding.Exps.MovingAngle,
		C3.Behaviors.Pathfinding.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.CompareZElevation,
		C3.Plugins.Sprite.Cnds.OnCollision
	];
};
self.C3_JsPropNameTable = [
	{"3DCamera": 0},
	{YAngle: 0},
	{Pin: 0},
	{Tween: 0},
	{Camera: 0},
	{cameraHeight: 0},
	{ZDirection: 0},
	{closestGround: 0},
	{closestCeiling: 0},
	{ZTop: 0},
	{ZHeight: 0},
	{groundTop: 0},
	{ceilingBottom: 0},
	{ZVelocity: 0},
	{ZAcceleration: 0},
	{coyoteJumpTime: 0},
	{canJump: 0},
	{wallRunZAcceleration: 0},
	{normalZAccleration: 0},
	{Physics: 0},
	{Timer: 0},
	{PlayerBody: 0},
	{static: 0},
	{solid: 0},
	{isStair: 0},
	{ceiling: 0},
	{StaticShape: 0},
	{interactable: 0},
	{toggleInteract: 0},
	{toggle: 0},
	{interactCondition: 0},
	{interactEvent: 0},
	{interactID: 0},
	{dirt: 0},
	{Texture_Brick1: 0},
	{Texture_BrickSidewalk1: 0},
	{Texture_BrickSidewalk2: 0},
	{Texture_BrickSidewalk3: 0},
	{Texture_DirtTrail: 0},
	{Texture_Grass1: 0},
	{Texture_Ground1: 0},
	{Texture_TiledFloor1: 0},
	{Texture_TiledFloor2: 0},
	{Texture_TiledFloor3: 0},
	{Texture_TiledFloor4: 0},
	{TiledBackground: 0},
	{Texture_TiledFloor5: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{TiledBackground5: 0},
	{fencebackground: 0},
	{Texture_Container1: 0},
	{Texture_Container2: 0},
	{Texture_Container3: 0},
	{Texture_Container4: 0},
	{Texture_Container5: 0},
	{Texture_Container6: 0},
	{Texture_Container7: 0},
	{Texture_SewerGrate1: 0},
	{Texture_SewerGrate2: 0},
	{Texture_Truck1: 0},
	{walltexture: 0},
	{TreeTexture: 0},
	{Crosshair: 0},
	{title: 0},
	{fade: 0},
	{title2: 0},
	{title3: 0},
	{Mouse: 0},
	{Keyboard: 0},
	{vZ: 0},
	{vX: 0},
	{vY: 0},
	{lastX: 0},
	{lastY: 0},
	{adjustment2D: 0},
	{damage: 0},
	{Bullet: 0},
	{PlayerInventory: 0},
	{Ray: 0},
	{behaviorState: 0},
	{movingAngle: 0},
	{walkSpeed: 0},
	{runSpeed: 0},
	{Custom: 0},
	{LineOfSight: 0},
	{Pathfinding: 0},
	{ZombieBody: 0},
	{ZombiePathfinding: 0},
	{ID: 0},
	{ZombieShape: 0},
	{ZombieVision: 0},
	{lighting: 0},
	{lightingmap: 0},
	{lightingmap2: 0},
	{lightingmap3: 0},
	{whichTrigger: 0},
	{PlayerCollisionTriggers: 0},
	{Browser: 0},
	{wall: 0},
	{numba: 0},
	{open: 0},
	{noor: 0},
	{joeverButton: 0},
	{joeverButton2: 0},
	{"3DShape8": 0},
	{"3DShape9": 0},
	{TiledBackground4: 0},
	{pickup: 0},
	{"3DObject": 0},
	{Car: 0},
	{Solid: 0},
	{spoof: 0},
	{spoof2: 0},
	{roadmesh: 0},
	{"3DObject2": 0},
	{garbagebag: 0},
	{grassmesh: 0},
	{itemspoof: 0},
	{raycast: 0},
	{raycastspoof: 0},
	{fogend: 0},
	{cullingend: 0},
	{fpstext: 0},
	{Video: 0},
	{Video2: 0},
	{stars: 0},
	{"3DObject3": 0},
	{flashlight: 0},
	{start: 0},
	{settings: 0},
	{instructions: 0},
	{credits: 0},
	{checklist: 0},
	{fullscreen: 0},
	{cardbox: 0},
	{brightnessslider: 0},
	{startingText: 0},
	{startingText2: 0},
	{startingText3: 0},
	{startingText4: 0},
	{startingText5: 0},
	{startingText6: 0},
	{interacthand: 0},
	{renderDistanceSlider: 0},
	{fence: 0},
	{box: 0},
	{box2: 0},
	{holewall: 0},
	{"3DShape": 0},
	{flashlighthand: 0},
	{interacthand2: 0},
	{phonehand: 0},
	{text: 0},
	{"3DFaceLight": 0},
	{light: 0},
	{Audio: 0},
	{TreeModel: 0},
	{"2dtrees": 0},
	{sprintToggle: 0},
	{exit: 0},
	{roadmesh2: 0},
	{roadmesh3: 0},
	{roadmesh4: 0},
	{roadmesh5: 0},
	{roadmesh6: 0},
	{trigger1: 0},
	{trigger2: 0},
	{trigger3: 0},
	{phoneText: 0},
	{MoveTo: 0},
	{POOKIE: 0},
	{pookieanims: 0},
	{truck: 0},
	{trigger4: 0},
	{dialogue: 0},
	{spoof3: 0},
	{trigger5: 0},
	{TiledBackground6: 0},
	{TiledBackground9: 0},
	{TiledBackground8: 0},
	{"3DShape2": 0},
	{noor2: 0},
	{noor3: 0},
	{noor4: 0},
	{noor5: 0},
	{noor6: 0},
	{noor7: 0},
	{"3DShape3": 0},
	{"3DShape4": 0},
	{"3DShape5": 0},
	{"3DShape6": 0},
	{"3DShape7": 0},
	{"3DShape10": 0},
	{"3DShape11": 0},
	{"3DShape12": 0},
	{"3DShape13": 0},
	{"3DShape14": 0},
	{"3DShape15": 0},
	{"3DShape16": 0},
	{"3DShape17": 0},
	{"3DShape18": 0},
	{"3DShape19": 0},
	{"3DShape20": 0},
	{"3DShape21": 0},
	{"3DShape22": 0},
	{"3DShape23": 0},
	{Texture_TiledFloor6: 0},
	{Texture_TiledFloor7: 0},
	{"3DShape24": 0},
	{"3DShape25": 0},
	{"3DShape26": 0},
	{"3DShape27": 0},
	{"3DShape28": 0},
	{"3DShape29": 0},
	{"3DShape30": 0},
	{"3DShape31": 0},
	{"3DShape32": 0},
	{"3DShape33": 0},
	{"3DShape34": 0},
	{"3DShape35": 0},
	{"3DShape36": 0},
	{"3DShape37": 0},
	{"3DShape39": 0},
	{"3DShape48": 0},
	{"3DShape49": 0},
	{"3DShape50": 0},
	{"3DShape51": 0},
	{"3DShape52": 0},
	{"3DShape53": 0},
	{box4: 0},
	{box3: 0},
	{"3DShape55": 0},
	{"3DShape56": 0},
	{"3DShape57": 0},
	{"3DShape58": 0},
	{box5: 0},
	{"3DShape54": 0},
	{"3DShape40": 0},
	{"3DShape41": 0},
	{"3DShape42": 0},
	{"3DShape43": 0},
	{"3DShape44": 0},
	{"3DShape45": 0},
	{"3DShape38": 0},
	{"3DShape46": 0},
	{"3DShape47": 0},
	{woodFloor: 0},
	{freezer: 0},
	{costume1: 0},
	{storage: 0},
	{clean1: 0},
	{ProgressBar: 0},
	{vent: 0},
	{ventfloor: 0},
	{scarezone: 0},
	{push: 0},
	{costume2: 0},
	{checklistTrigger: 0},
	{checklistItem: 0},
	{brickwall: 0},
	{ceiling1: 0},
	{meow: 0},
	{window: 0},
	{brickwall2: 0},
	{noor8: 0},
	{board1: 0},
	{boardchecklist: 0},
	{map: 0},
	{box6: 0},
	{stage: 0},
	{mic: 0},
	{"3DShape59": 0},
	{TABLE: 0},
	{ventwall: 0},
	{ventexit: 0},
	{ventHole: 0},
	{sink: 0},
	{window2: 0},
	{number: 0},
	{cleanDirt: 0},
	{window4: 0},
	{pookieScare: 0},
	{pookieScare2: 0},
	{dumpster: 0},
	{dumpster2: 0},
	{printer: 0},
	{flyers: 0},
	{restTrigger: 0},
	{backButton: 0},
	{noor9: 0},
	{sprintbar: 0},
	{leftArrow: 0},
	{rightArrow: 0},
	{pookieend: 0},
	{"3DShapes": 0},
	{Interactable: 0},
	{Zombies: 0},
	{mouseSensitivityX: 0},
	{mouseSensitivityY: 0},
	{Gravity: 0},
	{heightForStairJump: 0},
	{jumpStrength: 0},
	{walkSpeed1: 0},
	{walkSpeed2: 0},
	{runSpeed1: 0},
	{runSpeed2: 0},
	{accelerationFactor: 0},
	{currentSpeed1: 0},
	{currentSpeed2: 0},
	{crouch: 0},
	{door3: 0},
	{door1: 0},
	{spoofangle: 0},
	{carangle: 0},
	{cameraYAngle: 0},
	{incar: 0},
	{volume: 0},
	{intitle: 0},
	{BRIGHTNESS: 0},
	{RENDERDISTANCE: 0},
	{skip: 0},
	{carend: 0},
	{frame: 0},
	{phone: 0},
	{notification: 0},
	{noti1: 0},
	{noti2: 0},
	{noti3: 0},
	{ecar: 0},
	{truckevent: 0},
	{flashsound: 0},
	{caranim: 0},
	{gardistance: 0},
	{garbagebagele: 0},
	{isholdingbag: 0},
	{boxdistance: 0},
	{boxele: 0},
	{isholdingbox: 0},
	{boxdistance2: 0},
	{boxele2: 0},
	{isholdingbox2: 0},
	{costumedistance: 0},
	{costumeele: 0},
	{isholdingcostume: 0},
	{isholdingcostume2: 0},
	{cullfind3: 0},
	{cullfind2: 0},
	{cullfind: 0},
	{cullfind4: 0},
	{cullfind5: 0},
	{cullfind6: 0},
	{TREES: 0},
	{disable: 0},
	{hasitems: 0},
	{itemlist: 0},
	{truckTrigger: 0},
	{cleanProgress: 0},
	{cleanNumber: 0},
	{print: 0},
	{pProgress: 0},
	{pNumber: 0},
	{inVent: 0},
	{running: 0},
	{hasSight: 0},
	{death: 0},
	{stamina: 0},
	{whichZombie: 0}
];

self.InstanceType = {
	_3DCamera: class extends self.IInstance {},
	Camera: class extends self.ISpriteInstance {},
	PlayerBody: class extends self.ISpriteInstance {},
	StaticShape: class extends self.I3DShapeInstance {},
	ceiling: class extends self.I3DShapeInstance {},
	dirt: class extends self.I3DShapeInstance {},
	Texture_Brick1: class extends self.ITiledBackgroundInstance {},
	Texture_BrickSidewalk1: class extends self.ITiledBackgroundInstance {},
	Texture_BrickSidewalk2: class extends self.ITiledBackgroundInstance {},
	Texture_BrickSidewalk3: class extends self.ITiledBackgroundInstance {},
	Texture_DirtTrail: class extends self.ITiledBackgroundInstance {},
	Texture_Grass1: class extends self.ITiledBackgroundInstance {},
	Texture_Ground1: class extends self.ITiledBackgroundInstance {},
	Texture_TiledFloor1: class extends self.ITiledBackgroundInstance {},
	Texture_TiledFloor2: class extends self.ITiledBackgroundInstance {},
	Texture_TiledFloor3: class extends self.ITiledBackgroundInstance {},
	Texture_TiledFloor4: class extends self.ITiledBackgroundInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Texture_TiledFloor5: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	TiledBackground5: class extends self.ITiledBackgroundInstance {},
	fencebackground: class extends self.ITiledBackgroundInstance {},
	Texture_Container1: class extends self.ISpriteInstance {},
	Texture_Container2: class extends self.ISpriteInstance {},
	Texture_Container3: class extends self.ISpriteInstance {},
	Texture_Container4: class extends self.ISpriteInstance {},
	Texture_Container5: class extends self.ISpriteInstance {},
	Texture_Container6: class extends self.ISpriteInstance {},
	Texture_Container7: class extends self.ISpriteInstance {},
	Texture_SewerGrate1: class extends self.ISpriteInstance {},
	Texture_SewerGrate2: class extends self.ISpriteInstance {},
	Texture_Truck1: class extends self.ISpriteInstance {},
	walltexture: class extends self.ISpriteInstance {},
	TreeTexture: class extends self.ISpriteInstance {},
	Crosshair: class extends self.ISpriteInstance {},
	title: class extends self.ISpriteInstance {},
	fade: class extends self.ISpriteInstance {},
	title2: class extends self.ISpriteInstance {},
	title3: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Bullet: class extends self.I3DShapeInstance {},
	PlayerInventory: class extends self.IArrayInstance {},
	Ray: class extends self.ISpriteInstance {},
	ZombieBody: class extends self.ISpriteInstance {},
	ZombiePathfinding: class extends self.ITilemapInstance {},
	ZombieShape: class extends self.I3DShapeInstance {},
	ZombieVision: class extends self.ISpriteInstance {},
	lighting: class extends self.ITilemapInstance {},
	lightingmap: class extends self.ITilemapInstance {},
	lightingmap2: class extends self.ITilemapInstance {},
	lightingmap3: class extends self.ITilemapInstance {},
	PlayerCollisionTriggers: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	wall: class extends self.I3DShapeInstance {},
	noor: class extends self.I3DShapeInstance {},
	joeverButton: class extends self.I3DShapeInstance {},
	joeverButton2: class extends self.I3DShapeInstance {},
	_3DShape8: class extends self.I3DShapeInstance {},
	_3DShape9: class extends self.I3DShapeInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	pickup: class extends self.IWorldInstance {},
	_3DObject: class extends self.IWorldInstance {},
	spoof: class extends self.I3DShapeInstance {},
	spoof2: class extends self.I3DShapeInstance {},
	roadmesh: class extends self.ITiledBackgroundInstance {},
	_3DObject2: class extends self.IWorldInstance {},
	garbagebag: class extends self.IWorldInstance {},
	grassmesh: class extends self.ITiledBackgroundInstance {},
	itemspoof: class extends self.I3DShapeInstance {},
	raycast: class extends self.IWorldInstance {},
	raycastspoof: class extends self.IWorldInstance {},
	fogend: class extends self.I3DShapeInstance {},
	cullingend: class extends self.I3DShapeInstance {},
	fpstext: class extends self.ITextInstance {},
	Video: class extends self.IWorldInstance {},
	Video2: class extends self.IWorldInstance {},
	stars: class extends self.I3DShapeInstance {},
	_3DObject3: class extends self.IWorldInstance {},
	flashlight: class extends self.IWorldInstance {},
	start: class extends self.ISpriteInstance {},
	settings: class extends self.ISpriteInstance {},
	instructions: class extends self.ISpriteInstance {},
	credits: class extends self.ISpriteInstance {},
	checklist: class extends self.ISpriteInstance {},
	fullscreen: class extends self.ISpriteInstance {},
	cardbox: class extends self.IWorldInstance {},
	brightnessslider: class extends self.ISliderBarInstance {},
	startingText: class extends self.ITextInstance {},
	startingText2: class extends self.ITextInstance {},
	startingText3: class extends self.ITextInstance {},
	startingText4: class extends self.ITextInstance {},
	startingText5: class extends self.ITextInstance {},
	startingText6: class extends self.ITextInstance {},
	interacthand: class extends self.ISpriteInstance {},
	renderDistanceSlider: class extends self.ISliderBarInstance {},
	fence: class extends self.I3DShapeInstance {},
	box: class extends self.I3DShapeInstance {},
	box2: class extends self.I3DShapeInstance {},
	holewall: class extends self.I3DShapeInstance {},
	_3DShape: class extends self.I3DShapeInstance {},
	flashlighthand: class extends self.ISpriteInstance {},
	interacthand2: class extends self.ISpriteInstance {},
	phonehand: class extends self.ISpriteInstance {},
	text: class extends self.ISpriteInstance {},
	_3DFaceLight: class extends self.IInstance {},
	light: class extends self.I3DShapeInstance {},
	Audio: class extends self.IInstance {},
	TreeModel: class extends self.I3DShapeInstance {},
	_2dtrees: class extends self.ISpriteInstance {},
	sprintToggle: class extends self.ISpriteInstance {},
	exit: class extends self.ISpriteInstance {},
	solid: class extends self.ITiledBackgroundInstance {},
	roadmesh2: class extends self.ITiledBackgroundInstance {},
	roadmesh3: class extends self.ITiledBackgroundInstance {},
	roadmesh4: class extends self.ITiledBackgroundInstance {},
	roadmesh5: class extends self.ITiledBackgroundInstance {},
	roadmesh6: class extends self.ITiledBackgroundInstance {},
	trigger1: class extends self.ISpriteInstance {},
	trigger2: class extends self.ISpriteInstance {},
	trigger3: class extends self.ISpriteInstance {},
	phoneText: class extends self.ITextInstance {},
	POOKIE: class extends self.I3DShapeInstance {},
	pookieanims: class extends self.ISpriteInstance {},
	truck: class extends self.I3DShapeInstance {},
	trigger4: class extends self.ISpriteInstance {},
	dialogue: class extends self.ITextInstance {},
	spoof3: class extends self.I3DShapeInstance {},
	trigger5: class extends self.ISpriteInstance {},
	TiledBackground6: class extends self.ITiledBackgroundInstance {},
	TiledBackground9: class extends self.ITiledBackgroundInstance {},
	TiledBackground8: class extends self.ITiledBackgroundInstance {},
	_3DShape2: class extends self.I3DShapeInstance {},
	noor2: class extends self.I3DShapeInstance {},
	noor3: class extends self.I3DShapeInstance {},
	noor4: class extends self.I3DShapeInstance {},
	noor5: class extends self.I3DShapeInstance {},
	noor6: class extends self.I3DShapeInstance {},
	noor7: class extends self.I3DShapeInstance {},
	_3DShape3: class extends self.I3DShapeInstance {},
	_3DShape4: class extends self.I3DShapeInstance {},
	_3DShape5: class extends self.I3DShapeInstance {},
	_3DShape6: class extends self.I3DShapeInstance {},
	_3DShape7: class extends self.I3DShapeInstance {},
	_3DShape10: class extends self.I3DShapeInstance {},
	_3DShape11: class extends self.I3DShapeInstance {},
	_3DShape12: class extends self.I3DShapeInstance {},
	_3DShape13: class extends self.I3DShapeInstance {},
	_3DShape14: class extends self.I3DShapeInstance {},
	_3DShape15: class extends self.I3DShapeInstance {},
	_3DShape16: class extends self.I3DShapeInstance {},
	_3DShape17: class extends self.I3DShapeInstance {},
	_3DShape18: class extends self.I3DShapeInstance {},
	_3DShape19: class extends self.I3DShapeInstance {},
	_3DShape20: class extends self.I3DShapeInstance {},
	_3DShape21: class extends self.I3DShapeInstance {},
	_3DShape22: class extends self.I3DShapeInstance {},
	_3DShape23: class extends self.I3DShapeInstance {},
	Texture_TiledFloor6: class extends self.ITiledBackgroundInstance {},
	Texture_TiledFloor7: class extends self.ITiledBackgroundInstance {},
	_3DShape24: class extends self.I3DShapeInstance {},
	_3DShape25: class extends self.I3DShapeInstance {},
	_3DShape26: class extends self.I3DShapeInstance {},
	_3DShape27: class extends self.I3DShapeInstance {},
	_3DShape28: class extends self.I3DShapeInstance {},
	_3DShape29: class extends self.I3DShapeInstance {},
	_3DShape30: class extends self.I3DShapeInstance {},
	_3DShape31: class extends self.I3DShapeInstance {},
	_3DShape32: class extends self.I3DShapeInstance {},
	_3DShape33: class extends self.I3DShapeInstance {},
	_3DShape34: class extends self.I3DShapeInstance {},
	_3DShape35: class extends self.I3DShapeInstance {},
	_3DShape36: class extends self.I3DShapeInstance {},
	_3DShape37: class extends self.I3DShapeInstance {},
	_3DShape39: class extends self.I3DShapeInstance {},
	_3DShape48: class extends self.I3DShapeInstance {},
	_3DShape49: class extends self.I3DShapeInstance {},
	_3DShape50: class extends self.I3DShapeInstance {},
	_3DShape51: class extends self.I3DShapeInstance {},
	_3DShape52: class extends self.I3DShapeInstance {},
	_3DShape53: class extends self.I3DShapeInstance {},
	box4: class extends self.I3DShapeInstance {},
	box3: class extends self.I3DShapeInstance {},
	_3DShape55: class extends self.I3DShapeInstance {},
	_3DShape56: class extends self.I3DShapeInstance {},
	_3DShape57: class extends self.I3DShapeInstance {},
	_3DShape58: class extends self.I3DShapeInstance {},
	box5: class extends self.I3DShapeInstance {},
	_3DShape54: class extends self.I3DShapeInstance {},
	_3DShape40: class extends self.I3DShapeInstance {},
	_3DShape41: class extends self.I3DShapeInstance {},
	_3DShape42: class extends self.I3DShapeInstance {},
	_3DShape43: class extends self.I3DShapeInstance {},
	_3DShape44: class extends self.I3DShapeInstance {},
	_3DShape45: class extends self.I3DShapeInstance {},
	_3DShape38: class extends self.I3DShapeInstance {},
	_3DShape46: class extends self.I3DShapeInstance {},
	_3DShape47: class extends self.I3DShapeInstance {},
	woodFloor: class extends self.ITiledBackgroundInstance {},
	freezer: class extends self.ISpriteInstance {},
	costume1: class extends self.I3DShapeInstance {},
	storage: class extends self.ISpriteInstance {},
	clean1: class extends self.ISpriteInstance {},
	ProgressBar: class extends self.IProgressBarInstance {},
	vent: class extends self.ISpriteInstance {},
	ventfloor: class extends self.I3DShapeInstance {},
	scarezone: class extends self.ISpriteInstance {},
	push: class extends self.ISpriteInstance {},
	costume2: class extends self.I3DShapeInstance {},
	checklistTrigger: class extends self.ISpriteInstance {},
	checklistItem: class extends self.ISpriteInstance {},
	brickwall: class extends self.I3DShapeInstance {},
	ceiling1: class extends self.I3DShapeInstance {},
	meow: class extends self.I3DShapeInstance {},
	window: class extends self.I3DShapeInstance {},
	brickwall2: class extends self.I3DShapeInstance {},
	noor8: class extends self.I3DShapeInstance {},
	board1: class extends self.I3DShapeInstance {},
	boardchecklist: class extends self.I3DShapeInstance {},
	map: class extends self.ISpriteInstance {},
	box6: class extends self.I3DShapeInstance {},
	stage: class extends self.I3DShapeInstance {},
	mic: class extends self.I3DShapeInstance {},
	_3DShape59: class extends self.I3DShapeInstance {},
	TABLE: class extends self.I3DShapeInstance {},
	ventwall: class extends self.I3DShapeInstance {},
	ventexit: class extends self.ISpriteInstance {},
	ventHole: class extends self.I3DShapeInstance {},
	sink: class extends self.I3DShapeInstance {},
	window2: class extends self.I3DShapeInstance {},
	cleanDirt: class extends self.I3DShapeInstance {},
	window4: class extends self.I3DShapeInstance {},
	pookieScare: class extends self.ISpriteInstance {},
	pookieScare2: class extends self.ISpriteInstance {},
	dumpster: class extends self.I3DShapeInstance {},
	dumpster2: class extends self.I3DShapeInstance {},
	printer: class extends self.I3DShapeInstance {},
	flyers: class extends self.I3DShapeInstance {},
	restTrigger: class extends self.ISpriteInstance {},
	backButton: class extends self.ISpriteInstance {},
	noor9: class extends self.I3DShapeInstance {},
	sprintbar: class extends self.IProgressBarInstance {},
	leftArrow: class extends self.ISpriteInstance {},
	rightArrow: class extends self.ISpriteInstance {},
	pookieend: class extends self.ISpriteInstance {},
	_3DShapes: class extends self.I3DShapeInstance {},
	Interactable: class extends self.I3DShapeInstance {},
	Zombies: class extends self.ISpriteInstance {}
}