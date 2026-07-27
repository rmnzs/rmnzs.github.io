import command from '../../config.json';

const createTalk = () : string[] => {
  let string = "";
  const talks : string[] = [];
  const files = `${command.talks.length} File(s)`;
  const SPACE = "&nbsp;";

  talks.push("<br>")

  command.talks.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(Math.max(1, 17 - ele[0].length));
    string += ele[1];
    talks.push(string);
    string = '';
  });

  talks.push("<br>");
  talks.push(files);
  talks.push("<br>");
  return talks
}

export const TALKS = createTalk()
