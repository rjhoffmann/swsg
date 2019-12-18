import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue'

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
  generated: {
    color: blue[900],
  },
  typography: {
    marginBottom: theme.spacing(1),
  },
  regenerateFab: {
    position: 'absolute',
    bottom: theme.spacing(-8),
    right: theme.spacing(2),
  },
  source: {
    position: 'absolute',
    bottom: theme.spacing(-8),
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
      <Typography variant="body1" className={classes.typography}>
        In this Star Wars movie, our heroes return to take on the First Order
        and new villain <span className={classes.generated}>{villain}</span> with help from
        their new friend <span className={classes.generated}>{friend}</span>.
      </Typography>

      <Typography variant="body1" className={classes.typography}>
        Rey builds a new lightsaber with a <span className={classes.generated}>{lightsaber}</span> blade, and they head out
        to confront the First Order's new superweapon, The <span className={classes.generated}>{superweapon}</span>, a
        space station capable of <span className={classes.generated}>{capability}</span>.
      </Typography>

      <Typography variant="body1" className={classes.typography}>
        They unexpectedly join forces with their old enemy, <span className={classes.generated}>{enemy}</span>, and
        destroy the superweapon in a battle featuring <span className={classes.generated}>{battle}</span>.
      </Typography>

      <Typography variant="body2" className={classes.typography}>
        P.S. Rey's parents are <span className={classes.generated}>{parentX}</span> and <span className={classes.generated}>{parentY}</span>.
      </Typography>

      <Fab className={classes.regenerateFab} color="primary" onClick={() => setRegenerate(true)}>
        <RefreshIcon />
      </Fab>

      <Typography variant="caption" className={classes.source}>
        &lt;3 <a href="https://xkcd.com/2243/">XKCD</a>
      </Typography>
    </Container>
  )
}

export default App;
