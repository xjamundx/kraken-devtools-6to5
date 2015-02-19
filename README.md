kraken-devtools-babel
====================

a kraken-devtools plugin that adds es6 support using babel

### Installation

`npm install kraken-devtools-babel`

### Configuration

Add the following to your `devtools` config block:

```json
"babel": {
    "module": "kraken-devtools-babel",
    "files": "/js/**/*.js"
}
```

#### 6to5 Options

Customizing 6to5 can easily be done from this config block like so:

```json
"babel": {
    "module": "kraken-devtools-babel",
    "files": "/js/**/*.js",
    "options": {
    	"modules": "amd",
		"blacklist": ["useStrict"]
    }
}
```

Check out https://6to5.org/ for more options.

#### Timing The Transforms

There's also an additional option you can pass which times how long it takes:

```json
"babel": {
    "module": "kraken-devtools-babel",
    "files": "/js/**/*.js",
    "time": true
}
```

This will log the time of each file being transformed in a format similar to this:

`/js/view/header.js: 84ms`
