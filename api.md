 - [The color API](https://www.thecolorapi.com/docs#schemes)

GET/scheme{?hex,rgb,hsl,cmyk,format,mode,count}
Get a color scheme for a given seed color.

e.g.

/scheme?hex=24B1E0&mode=triad&count=6 || /scheme?rgb=rgb(0,71,171) || ...
Example URI
GET https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6
URI ParametersHide
hex
string (optional) Example: 0047AB
Valid hex code

rgb
string (optional) Example: 0,71,171
Valid rgb color, also rgb(0,71,171)

hsl
string (optional) Example: 215,100%,34%
Valid hsl color, also hsl(215,100%,34%)

cmyk
string (optional) Example: 100,58,0,33
Valid cmyk color, also cmyk(100,58,0,33)

format
string (optional) Default: json Example: html
Return results as JSON§, SVG or HTML page of results

Choices: json html svg

mode
string (optional) Default: monochrome Example: analogic
Define mode by which to generate the scheme from the seed color

Choices: monochrome monochrome-dark monochrome-light analogic complement analogic-complement triad quad

count
integer (optional) Default: 5 Example: 6
Number of colors to return

w
integer (optional) Default: 100 Example: 350
Height of resulting image, only applicable on SVG format

named
boolean (optional) Default: true Example: false
Whether to print the color names on resulting image, only applicable on SVG format