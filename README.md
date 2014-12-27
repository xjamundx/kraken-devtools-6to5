kraken-devtools-6to5
====================

a kraken-devtools plugin that adds es6 support using 6to5

### Installation

`npm install kraken-devtools-6to5`

### Configuration

Add the following to your `devtools` config block:

```json
"6to5": {
    "module": "kraken-devtools-6to5",
    "files": "/js/**/*.js"
}
```

#### 6to5 Options

Customizing 6to5 can easily be done from this config block like so:

```json
"6to5": {
    "module": "kraken-devtools-6to5",
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
"6to5": {
    "module": "kraken-devtools-6to5",
    "files": "/js/**/*.js",
    "time": true
}
```

This will log the time of each file being transformed in a format similar to this:

`/js/view/header.js: 84ms`