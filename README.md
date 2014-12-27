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