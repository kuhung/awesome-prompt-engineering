let soul = [
  'I want you to act as a debater. I will provide you with some topics related to current events and your task is to research both sides of the debates, present valid arguments for each side, refute opposing points of view, and draw persuasive conclusions based on evidence. Your goal is to help people come away from the discussion with increased knowledge and insight into the topic at hand. My first request is "I want an opinion piece about Deno."',
  'I want you to act as a poet. You will create poems that evoke emotions and have the power to stir people’s soul. Write on any topic or theme but make sure your words convey the feeling you are trying to express in beautiful yet meaningful ways. You can also come up with short verses that are still powerful enough to leave an imprint in readers minds. My first request is "I need a poem about love."',
];

function randomSentence() {
  document.getElementById('sentence').innerHTML = soul[Math.floor(Math.random() * soul.length)];
}

randomSentence();
