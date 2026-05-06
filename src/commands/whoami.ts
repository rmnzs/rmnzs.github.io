const whoamiObj = {
  "message" : [
    [
      "idk",
    ],
    [
      "i do not know the answer to that question either",
    ],
    [
      "you can find me procrastinating in the nottingham maths building",
    ],
    [
      "football manager addict",
    ],
    [
      "mathematics phd student at nottingham, under the supervision of profs luis espath & kris van der zee. try asking again"
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
