import React from "react";

export default function Backgrounds(props) 
{
    switch(props.name) 
    {
        case "diamonds":
            return (<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' ><rect fill={props.primary_color} width='24' height='24'/><defs><linearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'><stop offset='0'  stopColor={props.secondary_color}/><stop offset='1'  stopColor={props.accent_color}/></linearGradient></defs><pattern id='b'  width='9' height='9' patternUnits='userSpaceOnUse'><circle  fill={props.primary_color} cx='4.5' cy='4.5' r='4.5'/></pattern><rect width='100%' height='100%' fill='url(#a)'/><rect width='100%' height='100%' fill='url(#b)' fillOpacity='0.41'/></svg>);
            break;
        case "triangles":
            return (<svg xmlns='http://www.w3.org/2000/svg' ><rect id="svg_rec" width='540' height='450' fill={props.primary_color}/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%'gradientTransform='rotate(0,960,455)'><stop id="stop_zero" offset='0' stopColor={props.secondary_color}/><stop id="stop_one" offset='1' stopColor={props.primary_color}/></linearGradient><pattern patternUnits='userSpaceOnUse' id='b' width='300' height='250' x='0' y='0' viewBox='0 0 1080 900'><g fillOpacity='0.1'><polygon fill='#444' points='90 150 0 300 180 300' /><polygon points='90 150 180 0 0 0' /><polygon fill='#AAA' points='270 150 360 0 180 0' /><polygon fill='#DDD' points='450 150 360 300 540 300' /><polygon fill='#999' points='450 150 540 0 360 0' /><polygon points='630 150 540 300 720 300' /><polygon fill='#DDD' points='630 150 720 0 540 0' /><polygon fill='#444' points='810 150 720 300 900 300' /><polygon fill='#FFF' points='810 150 900 0 720 0' /><polygon fill='#DDD' points='990 150 900 300 1080 300' /><polygon fill='#444' points='990 150 1080 0 900 0' /><polygon fill='#DDD' points='90 450 0 600 180 600' /><polygon points='90 450 180 300 0 300' /><polygon fill='#666' points='270 450 180 600 360 600' /><polygon fill='#AAA' points='270 450 360 300 180 300' /><polygon fill='#DDD' points='450 450 360 600 540 600' /><polygon fill='#999' points='450 450 540 300 360 300' /><polygon fill='#999' points='630 450 540 600 720 600' /><polygon fill='#FFF' points='630 450 720 300 540 300' /><polygon points='810 450 720 600 900 600' /><polygon fill='#DDD' points='810 450 900 300 720 300' /><polygon fill='#AAA' points='990 450 900 600 1080 600' /><polygon fill='#444' points='990 450 1080 300 900 300' /><polygon fill='#222' points='90 750 0 900 180 900' /><polygon points='270 750 180 900 360 900' /><polygon fill='#DDD' points='270 750 360 600 180 600' /><polygon points='450 750 540 600 360 600' /><polygon points='630 750 540 900 720 900' /><polygon fill='#444' points='630 750 720 600 540 600' /><polygon fill='#AAA' points='810 750 720 900 900 900' /><polygon fill='#666' points='810 750 900 600 720 600' /><polygon fill='#999' points='990 750 900 900 1080 900' /><polygon fill='#999' points='180 0 90 150 270 150' /><polygon fill='#444' points='360 0 270 150 450 150' /><polygon fill='#FFF' points='540 0 450 150 630 150' /><polygon points='900 0 810 150 990 150' /><polygon fill='#222' points='0 300 -90 450 90 450' /><polygon fill='#FFF' points='0 300 90 150 -90 150' /><polygon fill='#FFF' points='180 300 90 450 270 450' /><polygon fill='#666' points='180 300 270 150 90 150' /><polygon fill='#222' points='360 300 270 450 450 450' /><polygon fill='#FFF' points='360 300 450 150 270 150' /><polygon fill='#444' points='540 300 450 450 630 450' /><polygon fill='#222' points='540 300 630 150 450 150' /><polygon fill='#AAA' points='720 300 630 450 810 450' /><polygon fill='#666' points='720 300 810 150 630 150' /><polygon fill='#FFF' points='900 300 810 450 990 450' /><polygon fill='#999' points='900 300 990 150 810 150' /><polygon points='0 600 -90 750 90 750' /><polygon fill='#666' points='0 600 90 450 -90 450' /><polygon fill='#AAA' points='180 600 90 750 270 750' /><polygon fill='#444' points='180 600 270 450 90 450' /><polygon fill='#444' points='360 600 270 750 450 750' /><polygon fill='#999' points='360 600 450 450 270 450' /><polygon fill='#666' points='540 600 630 450 450 450' /><polygon fill='#222' points='720 600 630 750 810 750' /><polygon fill='#FFF' points='900 600 810 750 990 750' /><polygon fill='#222' points='900 600 990 450 810 450' /><polygon fill='#DDD' points='0 900 90 750 -90 750' /><polygon fill='#444' points='180 900 270 750 90 750' /><polygon fill='#FFF' points='360 900 450 750 270 750' /><polygon fill='#AAA' points='540 900 630 750 450 750' /><polygon fill='#FFF' points='720 900 810 750 630 750' /><polygon fill='#222' points='900 900 990 750 810 750' /><polygon fill='#222' points='1080 300 990 450 1170 450' /><polygon fill='#FFF' points='1080 300 1170 150 990 150' /><polygon points='1080 600 990 750 1170 750' /><polygon fill='#666' points='1080 600 1170 450 990 450' /><polygon fill='#DDD' points='1080 900 1170 750 990 750' /></g></pattern></defs><rect x='0' y='0' fill='url(#a)' width='100%' height='100%' /><rect x='0' y='0' fill='url(#b)' width='100%' height='100%' /></svg>);
            break;
        case "empire":
            return (<svg style={{backgroundColor: props.primary_color}} xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49"><g fillOpacity=".25" fillRule="evenodd"><g id="hexagons" fill={props.accent_color} fillRule="nonzero"><path d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/></g></g></svg>);
            break;
        case "republic":
            return (<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='50.41' height='87' patternTransform='scale(1) rotate(70)'><rect x='0' y='0' width='100%' height='100%' fill={props.primary_color}/><path d='M25.3 87L12.74 65.25m0 14.5h-25.12m75.18 0H37.68M33.5 87l25.28-43.5m-50.23 29l4.19 7.25L16.92 87h-33.48m33.48 0h16.75-8.37zM8.55 72.5L16.92 58m50.06 29h-83.54m79.53-50.75L50.4 14.5M37.85 65.24L50.41 43.5m0 29l12.56-21.75m-50.24-14.5h25.12zM33.66 29l4.2 7.25 4.18 7.25M33.67 58H16.92l-4.18-7.25M-8.2 72.5l20.92-36.25L33.66 0m25.12 72.5H42.04l-4.19-7.26L33.67 58l4.18-7.24 4.19-7.25M33.67 29l8.37-14.5h16.74m0 29H8.38m29.47 7.25H12.74M50.4 43.5L37.85 21.75m-.17 58L25.12 58M12.73 36.25L.18 14.5M0 43.5l-12.55-21.75M24.95 29l12.9-21.75M12.4 21.75L25.2 0M12.56 7.25h-25.12m75.53 0H37.85M58.78 43.5L33.66 0h33.5m-83.9 0h83.89M33.32 29H16.57l-4.18-7.25-4.2-7.25m.18 29H-8.37M-16.74 0h33.48l-4.18 7.25-4.18 7.25H-8.37m8.38 58l12.73-21.75m-25.3 14.5L0 43.5m-8.37-29l21.1 36.25 20.94 36.24M8.37 72.5H-8.36'  strokeWidth='1' opacity=".5" stroke={props.accent_color} fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>);
            break;
        case "clean":
            return (<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='100' height='100' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill={props.primary_color}/><path d='M0 0v1l1-1H0zm6.29 0-.147.143 11.81 11.619 8.19-8.143L22.666.047 22.709 0h-1.998l-.045.047 3.477 3.572-6.19 6.143L8.238.192 8.434 0H6.289zm6.759 0 1.047 1.047L15.143 0h-2.094zm14.474 0 7.143 7.143-2.428 2.523-3.43-3.523-4.855 4.572 8.238 8.142L43.857 7.143 36.686 0h-2.008l7.226 7.191-9.666 9.713L26 10.762l2.762-2.57 3.476 3.617 4.477-4.618L29.572.047 29.62 0h-2.096zm14.288 0 4.808 4.809 4.572-4.57L50.953 0h-2.047l.285.285-2.572 2.572L43.762 0H41.81zm14.068 0-17.64 17.904 4.57 4.62L65 .333 64.697 0H62.79l.258.285-20.19 20.192-2.572-2.573L57.857 0H55.88zm14.549 0-3.62 3.62 8.145 8.142L86.666.047 86.619 0h-1.951l.047.047L75 9.762l-6.143-6.143 2.57-2.572L75 4.619 79.62 0h-2.048l-2.619 2.62L72.334 0h-1.906zm21.43 0-3.62 3.62 4.57 4.571L100 .998V0h-.953l-6.19 6.191-2.572-2.572L93.905 0h-2.048zm-88 2.191L0 6.091v2.04l3.762-3.846 2.666 3.049-6.381 6.19-.047-.05v2.098l8.38-8.095L3.858 2.19zM100 6.091l-4.572 4.624L100 15.572v-2.097l-2.572-2.713L100 8.13V6.09zm-35.762.1-4.572 4.57 4.572 4.573 4.57-4.572-4.57-4.57zm21.428 0L74.953 16.904l-3.572-3.57-4.572 4.57 8.144 8.143 15.285-15.285-4.572-4.57zm-21.428 2 2.57 2.57-2.57 2.573-2.572-2.572 2.572-2.57zm21.477 0 2.57 2.57L75 24.048l-6.143-6.143 2.57-2.57L75 18.904 85.715 8.191zM10.666 10 0 20.668v2L10.666 12l2.572 2.572L0 27.811v2l15.238-15.239L10.666 10zm46.43 3.334L42.809 27.619l-7.381-7.38-8.143 8.142 4.572 4.572 3.57-3.572 2.811 2.81-6.142 6.143L21.38 27.619l-4.572 4.572 15.287 15.286 25-25L67.809 33.19l4.572-4.572-15.285-15.285zm35.713.238-4.57 4.57 11.714 11.715.047-.046v-1.954l-9.715-9.714 2.572-2.57L100 22.714v-2.047l-.047.047-7.144-7.143zm-71.143.094-12 11.38 4.572 4.669 7.334-7.238 3.381 3.57 4.62-4.62-7.907-7.761zm35.43 1.62L70.38 28.571l-2.572 2.57-10.713-10.714-25 25-13.287-13.285 2.572-2.57 10.715 10.712 8.142-8.142-4.81-4.809-3.57 3.57-2.573-2.57 6.143-6.143 7.38 7.381 14.288-14.287zm-35.477.429 5.904 5.762L25 24l-3.38-3.523-7.335 7.285-2.57-2.62 9.904-9.427zm64.047 4.762-4.57 4.57L96.38 40.334l3.619-3.62V34.81L85.666 20.477zm.049 2L99 35.762l-2.572 2.572-13.285-13.287 2.572-2.57zm-6.953 4.904L67.809 38.334l-3.57-3.572-4.573 4.572 8.143 8.143 15.525-15.524-4.572-4.572zm-71.666.238-4.573 4.572L17.81 47.477l4.572-4.573L7.096 27.62zm50 0L45.38 39.334l4.572 4.57 11.713-11.713-4.57-4.572zm21.713 1.762 2.572 2.572-13.524 13.524-6.142-6.143 2.57-2.572 3.572 3.572L78.81 29.381zm-71.713.238L20.38 42.904l-2.572 2.573L4.523 32.19l2.573-2.572zm50 0 2.57 2.572-9.713 9.713-2.572-2.57 9.715-9.715zm28.57 5.143-4.57 4.572 11.713 11.713 4.572-4.57-11.715-11.715zM0 34.809v1.906l.953-.953L0 34.809zm85.715 1.953 9.713 9.715-2.57 2.57-9.715-9.713 2.572-2.572zm-82.192 1.81L0 41.877v2.08l2.523 2.424L0 48.973v2.12l7.096 7.098 8.142-8.144L3.523 38.572zm0 1.951L13.238 50l-6.142 6.143L.953 50l3.57-3.715L1 42.857l2.523-2.334zM100 41.877l-1.096 1.027L100 43.957v-2.08zm-57.191.027-4.57 4.573 4.57 4.57 4.572-4.57-4.572-4.573zm14.287 0L45.38 53.62l4.572 4.572 7.143-7.144 10.713 10.715 4.572-4.57-15.285-15.288zm21.476 0-8.144 8.143L75 54.619l3.572-3.572 7.143 7.144 4.57-4.572-11.713-11.715zm-35.763 2 2.572 2.573-2.572 2.57-2.57-2.57 2.57-2.573zm14.287 0L70.38 57.191l-2.572 2.57-10.713-10.714-7.143 7.144-2.572-2.572 9.715-9.715zm21.476 0 9.713 9.715-2.57 2.572-7.143-7.144L75 52.619l-2.572-2.572 6.144-6.143zm-53.619 1.573L9.666 60.762l4.572 4.572 15.285-15.287-4.57-4.57zm0 2 2.57 2.57-13.285 13.287-2.572-2.572 13.287-13.285zM100 48.973l-1.047 1.074L100 51.094v-2.121zm-64.334.074-4.57 4.572 18.857 18.858 11.713-11.715-4.57-4.57-7.143 7.142-14.287-14.287zm0 2 14.287 14.287 7.143-7.143 2.57 2.57-9.713 9.716-16.857-16.858 2.57-2.572zm60.953 1.81-4.572 4.57L100 65.382v-2.049l-5.904-5.904 2.57-2.57L100 58.19v-1.953l-3.38-3.38zm-68.096 3.334L9.666 75.047l4.572 4.572 7.143-7.142 7.142 7.142 4.573-4.572-7.143-7.143 2.57-2.57 7.143 7.143 4.572-4.573-11.715-11.713zm50 0-8.142 8.143 8.142 8.143 4.573-4.573-3.573-3.57 3.573-3.572-4.573-4.57zM0 56.238v2l9.666 9.666-2.57 2.573L0 63.38v2l7.096 7.096 4.57-4.573L0 56.238zm28.523 1.905 9.715 9.714-2.572 2.57-7.143-7.142-4.57 4.572L31.096 75l-2.573 2.572-7.142-7.144-7.143 7.144L11.666 75l16.857-16.857zm50 .048 2.573 2.57-3.573 3.573 3.573 3.57-2.573 2.573-6.142-6.143 6.142-6.143zm10.715 1.57-4.572 4.573 3.572 3.57-6.904 6.905 4.57 4.572 11.477-11.477-8.143-8.142zm.047 2 6.143 6.143-9.475 9.477-2.572-2.572 6.904-6.905-3.57-3.57 2.57-2.572zm-25.047 1.573-8.142 8.143 4.57 4.57 8.143-8.143-4.57-4.57zm0 2 2.57 2.57-6.142 6.143-2.57-2.57 6.142-6.143zm-21.43 5.143L28.524 84.762l-7.142-7.143-4.572 4.57 11.714 11.715 18.858-18.857-4.572-4.57zm28.573 0-4.572 4.57 11.714 11.715 4.573-4.573L71.38 70.477zm28.572 0L88.238 82.189l4.57 4.43 7.145-7 .047.047v-2.094l-7.143 7.047-2.572-2.476L100 72.428v-1.905l-.047-.046zM0 70.523v1.952l16.809 16.81-2.57 2.572-3.573-3.572-7.143 7.143L0 91.904v2.05l3.523 3.523 7.143-7.143 3.572 3.57 4.57-4.57L0 70.524zm42.809 1.954 2.572 2.57-16.858 16.857-9.714-9.715 2.572-2.57 7.142 7.143L42.81 72.477zm28.572 0 9.715 9.712-2.573 2.573-9.714-9.715 2.572-2.57zm-17.858 1.57-4.57 4.572 4.57 4.57 4.573-4.57-4.573-4.572zm0 2 2.573 2.572-2.573 2.57-2.57-2.57 2.57-2.572zM0 77.619v2.047l6.096 6.096-2.573 2.666L0 84.81v1.953l3.523 3.664 4.573-4.713L0 77.619zm64.238 0L53.523 88.334l-7.142-7.145-4.572 4.573 11.714 11.715L68.81 82.189l-4.57-4.57zm0 2 2.57 2.57-13.285 13.288-9.714-9.715 2.572-2.573 7.142 7.145 10.715-10.715zm7.143 5.143-8.143 8.142 4.57 4.573 3.573-3.573 3.572 3.573 4.57-4.573-8.142-8.142zm14.285 0-4.57 4.572L89 97.238l4.572-4.572-7.906-7.904zm14.287 0-4.572 4.572 4.619 4.62v-2.097l-2.572-2.572 2.572-2.57V84.81l-.047-.05zm-28.525 1.953 6.144 6.142L75 95.427l-3.572-3.57-3.57 3.57-2.573-2.57 6.143-6.142zm14.287.047 5.904 5.904-2.572 2.572-5.904-5.904 2.572-2.572zm-46.477 1.572-4.572 4.57L41.762 100h2l-7.096-7.096 2.572-2.57L48.906 100h2L39.238 88.334zm-18.095 3.57-7.096 7.143-3.332-3.332L6.289 100h2.143l2.33-2.285L13.049 100h2.094l6.095-6.096L24 96.524 20.71 100h1.999L26 96.428l-4.857-4.524zm75.476 3.334L91.857 100h2.047l2.762-2.762 2.572 2.57-.191.192H100v-1.38l-3.38-3.382zm-36.142.096L55.879 100h1.978l2.57-2.62L62.79 100h1.908l-4.22-4.666zm-28.381.094L27.523 100h2.096l2.524-2.523L34.678 100h2.008l-4.59-4.572zm50 .049L77.572 100h2.047l2.524-2.523L84.668 100h1.951l-4.523-4.523zM0 98.617V100h1l.191-.191L0 98.617zm71.38.43-.952.953h1.906l-.953-.953z'  stroke-width='1' stroke='none' opacity=".5" fill={props.secondary_color}/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>);
           break;
        default:
            return "";
      }
}