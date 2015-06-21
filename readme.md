# RadLibs ![Alt text](app/assets/images/radlib_logo.png?raw=true "our logo")
  * Remember adlibs? Of course you do! Radlibs is adlibs using famous quotes
    from movies, pop-culture, past genuises..and more.
  * This is a Hackathon project from 3 Iron Yard students based in
    Austin, TX: <a href="https://github.com/cczapski">Casie Czapski</a> on Design(SCSS, HTML), <a href="https://github.com/jlagrange87">Joshua Lagrange</a> on Front End(React, JQuery, VanJS), and <a href="https://github.com/BenHand">Ben Hand</a> on Back End(RoR, PG).
  * <a href="https://github.com/BenHand/madlib/tree/master/app/assets/images/style_tiles">Style Tiles</a>, <a href="https://github.com/BenHand/madlib/tree/master/app/assets/images/radlibs_wireframes">Wire Frames</a>, <a href="https://github.com/BenHand/madlib/tree/master/app/assets/images/UML">UML</a>, Logo all w/in app/assets/images directory
  * Trello ScrumBoard <a href="https://trello.com/b/3wAeQJSC/madlib">here</a>.
  * Try out RadLibs <a href="http://radlib.herokuapp.com/">here</a>.

## Installation Steps

```
 *  Fork this repo
 *  Clone this repo
 *  Run `gem install bundler`
 *  Run `bundle install`
 *  Run `rake db:create` #Will need to have postgres setup and running
 *  Run `rake db:seed` to populate the db with quotes
 *  Run `rails s` to start the server
```

## How To Use
 *  In the browser go to localhost:3000
 *  Create an Account/Login and start enjoying

### Final UML
![Alt text](app/assets/images/UML/finalUML.png?raw=true "Final UML")

### Directory Tree

```
51 directories, 605 files
.
├── Gemfile
├── Gemfile.lock
├── Procfile
├── Rakefile
├── app
│   ├── assets
│   │   ├── images
│   │   │   ├── radlibs_wireframes
│   │   │   │   ├── radlibs_create_medium.jpg
│   │   │   │   ├── radlibs_create_small.jpg
│   │   │   │   ├── radlibs_home_medium.jpg
│   │   │   │   ├── radlibs_home_small.jpg
│   │   │   │   ├── radlibs_your_quote_medium.jpg
│   │   │   │   └── radlibs_your_quote_small.jpg
│   │   │   └── style_tiles
│   │   │       ├── images
│   │   │       │   ├── visual_element1_v1.png
│   │   │       │   ├── visual_element1_v2.png
│   │   │       │   ├── visual_element2_v1.png
│   │   │       │   ├── visual_element2_v2.png
│   │   │       │   ├── visual_element3_v1.png
│   │   │       │   └── visual_element3_v2.png
│   │   │       ├── style_tile_radlibs_v1.psd
│   │   │       └── style_tile_radlibs_v2.psd
│   │   ├── javascripts
│   │   │   ├── application.js
│   │   │   ├── collections
│   │   │   │   ├── OriginalQuoteCollection.js.jsx
│   │   │   │   └── UserCollection.js.jsx
│   │   │   ├── components
│   │   │   │   ├── HomeComponent.js.jsx
│   │   │   │   ├── LoginComponent.js.jsx
│   │   │   │   ├── RadLibsComponent.js.jsx
│   │   │   │   └── RegistrationComponent.js.jsx
│   │   │   ├── main.js.jsx
│   │   │   └── models
│   │   │       ├── QuoteModel.js.jsx
│   │   │       └── UserModel.js.jsx
│   │   └── stylesheets
│   │       ├── _colors.scss
│   │       ├── _global.scss
│   │       ├── _layout.scss
│   │       ├── _media1.scss
│   │       ├── _reset.scss
│   │       ├── _type.scss
│   │       ├── application.scss
│   │       ├── mad_quotes.scss
│   │       ├── style.css
│   │       ├── style.css.map
│   │       ├── style.scss
│   │       └── users.scss
│   ├── controllers
│   │   ├── application_controller.rb
│   │   ├── concerns
│   │   ├── inspirations_controller.rb
│   │   ├── mad_quotes_controller.rb
│   │   ├── original_quotes_controller.rb
│   │   ├── sessions_controller.rb
│   │   └── users_controller.rb
│   ├── helpers
│   │   ├── application_helper.rb
│   │   ├── inspirations_helper.rb
│   │   ├── mad_quotes_helper.rb
│   │   ├── original_quotes_helper.rb
│   │   ├── sessions_helper.rb
│   │   └── users_helper.rb
│   ├── mailers
│   ├── models
│   │   ├── concerns
│   │   ├── inspiration.rb
│   │   ├── mad_quote.rb
│   │   ├── original_quote.rb
│   │   └── user.rb
│   └── views
│       ├── application
│       │   └── index.html.erb
│       ├── inspirations
│       ├── layouts
│       │   └── application.html.erb
│       ├── mad_quotes
│       ├── original_quotes
│       ├── sessions
│       └── users
├── bin
│   ├── bundle
│   ├── rails
│   ├── rake
│   ├── setup
│   └── spring
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── database.yml
│   ├── environment.rb
│   ├── environments
│   │   ├── development.rb
│   │   ├── production.rb
│   │   └── test.rb
│   ├── initializers
│   │   ├── assets.rb
│   │   ├── backtrace_silencers.rb
│   │   ├── cookies_serializer.rb
│   │   ├── filter_parameter_logging.rb
│   │   ├── inflections.rb
│   │   ├── mime_types.rb
│   │   ├── session_store.rb
│   │   └── wrap_parameters.rb
│   ├── locales
│   │   └── en.yml
│   ├── routes.rb
│   └── secrets.yml
├── config.ru
├── db
│   ├── migrate
│   │   ├── 20150618213538_create_users.rb
│   │   ├── 20150618214202_create_original_quotes.rb
│   │   ├── 20150618214209_create_mad_quotes.rb
│   │   ├── 20150619203752_create_inspirations.rb
│   │   └── 20150621160433_add_span_quote_column_to_mad_quotes.rb
│   ├── schema.rb
│   └── seeds.rb
├── lib
│   ├── assets
│   └── tasks
├── log
│   └── development.log
├── public
│   ├── 404.html
│   ├── 422.html
│   ├── 500.html
│   ├── favicon.ico
│   └── robots.txt
├── readme.md
├── tmp
│   ├── cache
│   │   └── assets
│   │       └── development
│   │           └── sprockets
│   ├── pids
│   │   └── server.pid
│   ├── react-rails
│   │   ├── JSXTransformer.js
│   │   └── react.js
│   ├── sessions
│   └── sockets
└── vendor
    └── assets
        ├── javascripts
        └── stylesheets
```
