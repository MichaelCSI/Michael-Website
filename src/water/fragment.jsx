const fragmentShader = /* glsl */`

    uniform vec3 uDepthColor;
    uniform vec3 uSurfaceColor;
    uniform float uColorOffset;
    uniform float uColorMultiplier;

    uniform vec2 uPointerCoordinates;
    uniform vec2 uViewPort;
    uniform float uPointerSize;
    uniform float uTime;

    uniform int uShaderMode;

    varying float vElevation;

    void main()
    {
        float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
        vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);        
        
        vec2 uv = gl_FragCoord.xy / uViewPort;

        float dist = distance(uv, uPointerCoordinates);
        float rangeY = pow(uPointerSize, uPointerCoordinates.y);
        float mixAmmount = clamp(dist / rangeY / pow(uPointerCoordinates.y, 2.0), 0.0, 1.0 );

        float maxXY = max(uPointerCoordinates.x, uPointerCoordinates.y);

        if(uShaderMode == 1) {
            gl_FragColor = vec4(color, 1.0);
        } else if (uShaderMode == 2) {
            vec3 colorMouse = mix(color, vec3(uPointerCoordinates.x / 2.0, 1.0, 1.0), mixStrength / dist * clamp(rangeY, 0.01, 0.5));
            vec3 colorWater = mix(colorMouse, vec3(uPointerCoordinates.x, uPointerCoordinates.x, 1.0), mixStrength);
            gl_FragColor = vec4(colorWater, 1.0);        
        } else if(uShaderMode == 3) {
            vec3 colorMouse = mix(color, vec3(maxXY, maxXY, 1.0), mixAmmount);
            gl_FragColor = vec4(colorMouse, 1.0);         
        } else if(uShaderMode == 4) {
            gl_FragColor = vec4(mix(color, vec3(uPointerCoordinates, 1.0), mixStrength), 1.0);         
        } else {
            vec3 colorMouse = mix(color, vec3(uPointerCoordinates.x / 2.5, 0.5, 0.8), mixStrength / dist * pow(rangeY + 0.1, 3.0));
            vec3 colorWater = mix(colorMouse, vec3(uPointerCoordinates.x, uPointerCoordinates.x, 1.0), mixStrength);
            gl_FragColor = vec4(colorWater, 1.0);       
        }
        
    }
`

export default fragmentShader