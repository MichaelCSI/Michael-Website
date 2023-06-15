const fragmentShader = /* glsl */`

    uniform vec3 uDepthColor;
    uniform vec3 uSurfaceColor;
    uniform float uColorMultiplier;

    uniform vec2 uPointerCoordinates;
    uniform vec2 uViewPort;
    uniform float uPointerSize;
    uniform float uTime;
    uniform int uFragShaderMode;

    varying float vElevation;

    void main()
    {
        float mixStrength = vElevation * uColorMultiplier;
        vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);        
        
        vec2 uv = gl_FragCoord.xy / uViewPort;

        float dist = distance(uv, uPointerCoordinates);
        float rangeY = pow(uPointerSize, uPointerCoordinates.y);

        float maxXY = max(uPointerCoordinates.x, uPointerCoordinates.y);

        if(uFragShaderMode == 1) {

            gl_FragColor = vec4(color, 1.0);

        } else if (uFragShaderMode == 2) {

            vec3 colorMouse = mix(vec3(0.0, 0.0, 0.0), color, mixStrength / pow(dist + 0.05, 1.5) * pow(rangeY, 2.0));
            gl_FragColor = vec4(colorMouse, 1.0);  

        } else if(uFragShaderMode == 3) {

            gl_FragColor = vec4(mix(color, vec3(uPointerCoordinates, 1.0), mixStrength), 1.0);  

        } else if(uFragShaderMode == 4) {

            vec3 disco = mix(vec3(0.0, 0.0, 0.0), color, mixStrength / (0.001 * sin(3.0 * uTime) + 0.01));
            vec3 lightDist = mix(color, disco, pow(uv.y + 0.5, 8.0));
            gl_FragColor = vec4(lightDist, 1.0);

        } else {

            gl_FragColor = vec4(color.r += 0.5, color.gb, 1.0);
            
        }
    }
`

export default fragmentShader