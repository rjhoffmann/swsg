import React, { useEffect, useState } from 'react';

import _sample from 'lodash/sample';
import Typography from '@material-ui/core/Typography';

import data from './data';

function App() {
  const [villan, setVillan] = useState('');
  const [friend, setFriend] = useState('');
  const [lightsaber, setLightsaber] = useState('');
  const [superweapon, setSuperweapon] = useState('');
  const [capability, setCapability] = useState('');
  const [enemy, setEnemy] = useState('');
  const [battle, setBattle] = useState('');
  const [parentX, setParentX] = useState('');
  const [parentY, setParentY] = useState('');

  const [regenerate, setRegenerate] = useState(true);

  useEffect(() => {
    if (regenerate) {
      setVillan(_sample(data.villans));
      setFriend(_sample(data.friends));
      setLightsaber(_sample(data.lightsabers));
      setSuperweapon(_sample(data.superweapons));
      setCapability(_sample(data.capabilities));
      setEnemy(_sample(data.enemies));
      setBattle(_sample(data.battle));
      setParentX(_sample(data.parentsX));
      setParentY(_sample(data.parentsY));
    }

    setRegenerate(false);
  }, [regenerate]);

  return (
    <div>
      <p>In this Star Wars movie, our heroes return to take on the First Order and new villan {villan} with help from their new firend {friend}.</p>
      <p>Rey builds a new lightsaber with a {lightsaber} blade, and they head out to confront the First Order's new superweapon, The {superweapon}, a space station capable of {capability}.</p>
      <p>They unexpectedly join forces with their old enemy {enemy} and destroy the superweapon in a battle featuring {battle}.</p>
      <br />
      <p>P.S. Rey's parents are {parentX} and {parentY}</p>
    </div>
  )
}

export default App;
