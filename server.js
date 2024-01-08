const express = require('express'),
      path = require('path'),
      app = express(),
      PORT = 8900,
      icon='/img/logo3.png',
      createPath = (page) => path.resolve(__dirname, 'views', `${page}.ejs`);
      
app.set('view engine', 'ejs');
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`👽пачынаем на парту -->${PORT}`);
  }); 
app.use(express.static('public'))

// get
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render(createPath('index'), { title,icon });
  });
app.get('/home', (req, res) => {
  const title = 'Home';
  res.render(createPath('main'), { title,icon });
});
app.get('/profile', (req, res) => {
    const title = 'My Channel';
    res.render(createPath('profile'), {title,icon, });
  });
app.get('/play-video', (req, res) => {
  let likes =[];
  const title = 'Play video';
  res.render(createPath('play-video'), { title,icon });
});

// error . . . 404 X_X
app.use((req, res) => {
    const title = 'Error Page';
    res
      .status(404)
      .render(createPath('error'), { title,icon });
  });
  