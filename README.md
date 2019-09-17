# react-native-env-label
Label for environments your apps

## For Why
This is the package you need to see the name of your environment, and it also creates your own custom buttons for easy development.

## Gettings Started
```
npm i --save react-native-env-label
```

## Example
The package is best rendered in the main component and after all the components as in the example.
```js
import LabelEnv from 'react-native-env-label';

class App extends Component {
  render() {
    const customButtons = [{
      txt: "First Btn",
      handler: () => alert("First")
    }, {
      txt: "Seccond Btn",
      handler: () => alert("Seccond")
    }];

    return (
      <Root>
        <App />

        <LabelEnv
          envName="Env Name"
          buttons={customButtons}
        />
      </Root>
    );
  }
}
```

## Label Env functions
![](https://media.giphy.com/media/MCLTegRhvTSX5e2CBU/giphy.gif)

