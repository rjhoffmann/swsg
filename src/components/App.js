import React, { useEffect, useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import RefreshIcon from '@material-ui/icons/Refresh';

import _sample from 'lodash/sample';

import data from './data';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(8),
    position: 'relative'
  },
  regenerateFab: {
    position: 'absolute',
    bottom: theme.spacing(-8),
    right: theme.spacing(2),
  },
}))

function App() {
  const classes = useStyles();

  const [villain, setVillain] = useState('');
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
      setVillain(_sample(data.villans));
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
    <Container className={classes.container} maxWidth="sm">
      <Typography variant="body1">
        In this Star Wars movie, our heroes return to take on the First Order
        and new villain {villain} with help from their new friend {friend}.
      </Typography>

      <Typography variant="body1">
        Rey builds a new lightsaber with a {lightsaber} blade, and they head out
        to confront the First Order's new superweapon, The {superweapon}, a
        space station capable of {capability}.
      </Typography>

      <Typography variant="body1">
        They unexpectedly join forces with their old enemy, {enemy}, and
        destroy the superweapon in a battle featuring {battle}.
      </Typography>

      <Typography variant="body2">
        P.S. Rey's parents are {parentX} and {parentY}.
      </Typography>

      <Fab className={classes.regenerateFab} color="primary" onClick={() => setRegenerate(true)}>
        <RefreshIcon />
      </Fab>
    </Container>
  )
}

export default App;
