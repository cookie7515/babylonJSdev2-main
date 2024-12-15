# Element 5


## Hemispheric Light

```

function createHemisphericLight(scene: Scene) {
  const light: HemisphericLight = new HemisphericLight(
    "light",
    new Vector3(1, 10, 0),
    scene
  );
  light.intensity = 0.3;
  light.diffuse = new Color3(1, 0, 0);
  light.specular = new Color3(0, 1, 0);
  light.groundColor = new Color3(0, 1, 0);
  return light;
}

```

* This function creates a hemispheric light within the scene which is used to brighten the scene. The code can be adjusted to change the intesity of the brightness if and when required.

## Shadows

```

function createShadows(light: DirectionalLight, sphere: Mesh, box: Mesh) {
  const shadower = new ShadowGenerator(1024, light);
  const shadowmap: any = shadower.getShadowMap();
  shadowmap.renderList.push(sphere, box);

  shadower.setDarkness(0.2);
  shadower.useBlurExponentialShadowMap = true;
  shadower.blurScale = 4;
  shadower.blurBoxOffset = 1;
  shadower.useKernelBlur = true;
  shadower.blurKernel = 64;
  shadower.bias = 0;
  return shadower;
}

```

* This function has the purpose of adding shadows into the scene this works with the previously set up lighting to add realism and give depth. Both the box and sphere had shadows attached to them to keep the scene consistent

## Buttons

```

function createSceneButton(scene: Scene, name: string, note: string, index: number, x: string, y: string, advtex) {
    let button = GUI.Button.CreateSimpleButton(name, note);
        button.left = x;
        button.top = y;
        button.width = "80px";
        button.height = "30px";
        button.color = "white";
        button.cornerRadius = 20;
        button.background = "purple";

        button.onPointerUpObservable.add(function() {
            console.log("THE BUTTON HAS BEEN CLICKED");
           
            setSceneIndex(index -1);
        });
        advtex.addControl(button);
        return button;
 }

 ```

 * This code creates the buttons required to switch between the scenes. The button will update the scene index according to its value and switch to its corresponding scene when clicked.

 * To ensure that the button worked in testing there was a small amount of debugging code implemented which was used to check if the button was registering a click even if the scene wasn't switching. This allowed for me to close down on any area which may have caused the issue.
