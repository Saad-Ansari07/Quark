import React from 'react'
import './About.css'
import useWebAnimations, { fadeInDown } from "@wellyshen/use-web-animations";

export const About = () => {
    const { ref: y } = useWebAnimations({ ...fadeInDown });
    return (
        <div className="abt">
            <h1>About us</h1>
            <div className="smallpad" ref={y}>
            <p>We are the DevOps community behind Quark.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis metus dignissim, commodo justo ac, bibendum nunc. Etiam tempus, odio sit amet lacinia lobortis, nisl nibh euismod orci, vel pharetra ipsum sapien quis risus. Aliquam enim diam, imperdiet nec eros sit amet, ultricies ornare ligula. Aenean luctus eros id eros efficitur, a hendrerit mauris rhoncus. Sed a metus at tortor accumsan elementum auctor sed felis. Sed vel felis vulputate, rhoncus diam et, rutrum tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum malesuada malesuada dapibus. Etiam hendrerit nulla quis orci gravida feugiat. Suspendisse potenti. Vestibulum commodo eu mi in sodales. Sed mollis vestibulum nisi. Sed semper ex id libero efficitur, sed mollis sem hendrerit. Nunc vel ante ut purus dictum facilisis. Sed non suscipit diam. Phasellus fringilla velit magna, a auctor diam mollis nec.

Donec consectetur ipsum non velit tincidunt convallis. Quisque ultricies tincidunt aliquam. Quisque rhoncus augue a vulputate convallis. Donec consequat velit quis leo lobortis placerat. Vivamus orci quam, eleifend eu consectetur tempor, congue vel est. Mauris venenatis justo arcu, ac dictum enim sodales vitae. Etiam at elementum augue, eu volutpat felis. Vestibulum mollis auctor ligula, vestibulum dictum neque tincidunt et. Vivamus vitae ullamcorper dui. Cras sit amet interdum dolor, in pharetra dui. Vivamus rhoncus, ante in consequat placerat, sem lacus fringilla quam, nec commodo felis lorem at ex. Curabitur viverra justo eu tellus pretium, eget pellentesque sem iaculis.

Quisque nec elit ac diam consectetur euismod id et diam.</p>
            </div>
        </div>
    )
}
