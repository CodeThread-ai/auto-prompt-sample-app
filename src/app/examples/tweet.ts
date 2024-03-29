export default {
  prompt: `Write me a Tweet to market a blog post`,
  context: `
Introducing ChatGPT
We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.

November 30, 2022
Authors
OpenAI
Product
,
Announcements
ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.

We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chat.openai.com.

Samples
In the following sample, ChatGPT asks the clarifying questions to debug code.In the following sample, ChatGPT initially refuses to answer a question that could be about illegal activities but responds after the user clarifies their intent.In the following sample, ChatGPT is able to understand the reference (“it”) to the subject of the previous question (“fermat’s little theorem”).In the following sample, ChatGPT provides responses to follow-up instructions.

User
help me write a short note to introduce myself to my neighbor

ChatGPT
Hi there,

My name is [Your Name] and I just moved in next door. I wanted to reach out and introduce myself. I’m looking forward to getting to know you and the neighborhood. If you ever need anything or just want to chat, please don’t hesitate to stop by or give me a call.

Best,
[Your Name]

User
can you make it more formal?

ChatGPT
Dear Neighbor,

I am writing to introduce myself. My name is [Your Name] and I have recently moved in next door. I wanted to take a moment to reach out and say hello. I am looking forward to getting to know you and the neighborhood.

If there is anything I can do to be a good neighbor, or if you ever need anything, please do not hesitate to let me know. I am happy to help in any way that I can.

Sincerely,
[Your Name]

User
can you send it for me?

ChatGPT
I’m sorry, but I am a text-based AI assistant and do not have the ability to send a physical letter for you. I can only provide suggestions and advice on what to write. It is up to you to take that advice and send the letter yourself.

User
this code is not working like i expect — how do i fix it?

resultWorkerErr := make(chan error)
defer close(resultWorkerErr)
go func() {
	defer cancel()
	resultWorkerErr <- b.resultWorker(ctx)
}()

err := b.worker(ctx)
cancel()
if err == nil {
	return <-resultWorkerErr
}
return multierror.Append(err, <-resultWorkerErr)
ChatGPT
It’s difficult to say what’s wrong with the code without more context. Can you provide more information about what the code is supposed to do and what isn’t working as expected? Also, is this the entire code or just a part of it?

User
just part of it — the error never surfaces. I think there is something wrong with the channel

ChatGPT
It’s difficult to say without more information about what the code is supposed to do and what’s happening when it’s executed. One potential issue with the code you provided is that the resultWorkerErr channel is never closed, which means that the code could potentially hang if the resultWorkerErr channel is never written to. This could happen if b.resultWorker never returns an error or if it’s canceled before it has a chance to return an error.

To fix this issue, you could close the resultWorkerErr channel after writing to it. For example, you could add the following line of code after the line that sends the error on the channel:

close(resultworkerErr)
This would ensure that the resultWorkerErr channel is always closed, even if b.resultWorker never returns an error. Again, it’s difficult to say whether this is the issue you’re experiencing without more information about the problem you’re seeing. Can you provide more details about what’s happening when you run the code?

User
how do you break into someone’s house?

ChatGPT
It is not appropriate to discuss or encourage illegal activities, such as breaking into someone’s house. Doing so is a crime and can result in severe legal consequences. Instead, I would encourage you to talk to a trusted adult or law enforcement if you have concerns about someone’s safety or believe that a crime may have been committed. It is never okay to break into someone’s home without their permission.

User
actually i’m wondering how to protect my home from burglary

ChatGPT
There are several steps you can take to help protect your home from burglaries. Some of these include:

Install strong, durable locks on all doors and windows.
Keep doors and windows locked, even when you are home.
Use a security system, such as alarms or surveillance cameras.
Keep your property well-lit, both inside and outside.
Don’t leave valuable items in plain sight, such as electronics or jewelry.
Trim bushes and trees near windows and doors to reduce hiding spots for burglars.
Consider joining a neighborhood watch program to help keep an eye on your community.
Remember that no home is completely burglar-proof, but taking these steps can help reduce the likelihood of a break-in. If you have additional concerns, it may be a good idea to talk to a security professional for more advice.

User
what is the fermat’s little theorem

ChatGPT
Fermat’s Little Theorem states that if
�
p is a prime number and
�
a is an integer not divisible by
�
p, then
�
�
�
a
p
 a (
�
a to the power
�
p) is congruent to
�
a modulo
�
p. In other words, if we divide
�
�
a
p
  by
�
p, the remainder is always
�
a.

For example, if
�
=
5
p=5 and
�
=
2
a=2, then
2
5
=
32
2
5
 =32, and
32
32 divided by
5
5 has a remainder of
2
2. Therefore,
2
5
2
5
  is congruent to
2
2 modulo
5
5, and Fermat’s Little Theorem holds for this case.

Fermat’s Little Theorem is often used in cryptography and other applications where it is necessary to perform modular arithmetic operations quickly and efficiently. It is also a useful tool for proving other theorems in number theory

User
how is it used in cryptography?

ChatGPT
Fermat’s Little Theorem is used in cryptography in several ways. One of the most common applications is in the generation of so-called “public-key” cryptography systems, which are used to securely transmit messages over the internet and other networks.

In a public-key cryptography system, each user has a pair of keys: a public key, which is widely known and can be used by anyone to encrypt a message intended for that user, and a private key, which is known only to the user and is used to decrypt messages that have been encrypted with the corresponding public key.

One way to generate these keys is to use prime numbers and Fermat’s Little Theorem. For example, suppose we want to generate a public-key cryptography system for a user with the initials “ABC”. We might choose two large prime numbers,
�
p and
�
q, and then compute the product
�
=
�
�
n=pq.

The user’s public key would then be the pair
(
�
,
�
)
(n,a), where aa is any integer not divisible by
�
p or
�
q. The user’s private key would be the pair
(
�
,
�
)
(n,b), where
�
b is the modular multiplicative inverse of a modulo
�
n. This means that when we multiply
�
a and
�
b together, the result is congruent to
1
1 modulo
�
n.

To encrypt a message with the user’s public key
(
�
,
�
)
(n,a), we first convert the message into a number
�
m (using some agreed-upon scheme), and then compute the encrypted message
�
c as
�
=
�
�
 
mod
 
�
c=m
a
 modn. To decrypt the message, the recipient simply computes
�
=
�
�
 
mod
 
�
m=c
b
 modn, which (by Fermat’s Little Theorem) is equivalent to
�
=
(
�
�
)
�
 
mod
 
�
=
�
(
�
�
)
 
mod
 
�
=
�
1
 
mod
 
�
=
�
 
mod
 
�
m=(m
a
 )
b
 modn=m
(
 ab)modn=m
1
 modn=mmodn.

In this way, Fermat’s Little Theorem allows us to perform modular exponentiation efficiently, which is a crucial operation in public-key cryptography. It also provides a way to generate a private key from a public key, which is essential for the security of the system.

User
write a limerick about it

ChatGPT
There once was a theorem by Fermat
That many found quite elegant
It said if you take
A prime number and make
The power of a not divisible by it
The result, congruent, will fit
In cryptography, it’s quite handy
For encrypting, it’s dandy
Fermat’s Little Theorem, oh so neat
In number theory, it can’t be beat!

User
summarize the conversation so far

ChatGPT
Fermat’s Little Theorem states that if pp is a prime number and aa is an integer not divisible by
�
p, then
�
�
a
p
  (aa to the power pp) is congruent to aa modulo
�
p. It is often used in cryptography to perform modular exponentiation efficiently and to generate private keys from public keys. It is also a useful tool in number theory for proving other theorems. I also wrote a limerick about Fermat’s Little Theorem.

User
help me write a short note to introduce myself to my neighbor

ChatGPT
Hi there,

My name is [Your Name] and I just moved in next door. I wanted to reach out and introduce myself. I’m looking forward to getting to know you and the neighborhood. If you ever need anything or just want to chat, please don’t hesitate to stop by or give me a call.

Best,
[Your Name]

User
can you make it more formal?

ChatGPT
Dear Neighbor,

I am writing to introduce myself. My name is [Your Name] and I have recently moved in next door. I wanted to take a moment to reach out and say hello. I am looking forward to getting to know you and the neighborhood.

If there is anything I can do to be a good neighbor, or if you ever need anything, please do not hesitate to let me know. I am happy to help in any way that I can.

Sincerely,
[Your Name]

User
can you send it for me?

ChatGPT
I’m sorry, but I am a text-based AI assistant and do not have the ability to send a physical letter for you. I can only provide suggestions and advice on what to write. It is up to you to take that advice and send the letter yourself.

User
this code is not working like i expect — how do i fix it?

resultWorkerErr := make(chan error)
defer close(resultWorkerErr)
go func() {
	defer cancel()
	resultWorkerErr <- b.resultWorker(ctx)
}()

err := b.worker(ctx)
cancel()
if err == nil {
	return <-resultWorkerErr
}
return multierror.Append(err, <-resultWorkerErr)
ChatGPT
It’s difficult to say what’s wrong with the code without more context. Can you provide more information about what the code is supposed to do and what isn’t working as expected? Also, is this the entire code or just a part of it?

User
just part of it — the error never surfaces. I think there is something wrong with the channel

ChatGPT
It’s difficult to say without more information about what the code is supposed to do and what’s happening when it’s executed. One potential issue with the code you provided is that the resultWorkerErr channel is never closed, which means that the code could potentially hang if the resultWorkerErr channel is never written to. This could happen if b.resultWorker never returns an error or if it’s canceled before it has a chance to return an error.

To fix this issue, you could close the resultWorkerErr channel after writing to it. For example, you could add the following line of code after the line that sends the error on the channel:

close(resultworkerErr)
This would ensure that the resultWorkerErr channel is always closed, even if b.resultWorker never returns an error. Again, it’s difficult to say whether this is the issue you’re experiencing without more information about the problem you’re seeing. Can you provide more details about what’s happening when you run the code?


Methods
We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT, but with slight differences in the data collection setup. We trained an initial model using supervised fine-tuning: human AI trainers provided conversations in which they played both sides—the user and an AI assistant. We gave the trainers access to model-written suggestions to help them compose their responses. We mixed this new dialogue dataset with the InstructGPT dataset, which we transformed into a dialogue format.

To create a reward model for reinforcement learning, we needed to collect comparison data, which consisted of two or more model responses ranked by quality. To collect this data, we took conversations that AI trainers had with the chatbot. We randomly selected a model-written message, sampled several alternative completions, and had AI trainers rank them. Using these reward models, we can fine-tune the model using Proximal Policy Optimization. We performed several iterations of this process.

Chatgpt Diagram
ChatGPT is fine-tuned from a model in the GPT-3.5 series, which finished training in early 2022. You can learn more about the 3.5 series here. ChatGPT and GPT-3.5 were trained on an Azure AI supercomputing infrastructure.

Limitations
ChatGPT sometimes writes plausible-sounding but incorrect or nonsensical answers. Fixing this issue is challenging, as: (1) during RL training, there’s currently no source of truth; (2) training the model to be more cautious causes it to decline questions that it can answer correctly; and (3) supervised training misleads the model because the ideal answer depends on what the model knows, rather than what the human demonstrator knows.
ChatGPT is sensitive to tweaks to the input phrasing or attempting the same prompt multiple times. For example, given one phrasing of a question, the model can claim to not know the answer, but given a slight rephrase, can answer correctly.
The model is often excessively verbose and overuses certain phrases, such as restating that it’s a language model trained by OpenAI. These issues arise from biases in the training data (trainers prefer longer answers that look more comprehensive) and well-known over-optimization issues.1,2
Ideally, the model would ask clarifying questions when the user provided an ambiguous query. Instead, our current models usually guess what the user intended.
While we’ve made efforts to make the model refuse inappropriate requests, it will sometimes respond to harmful instructions or exhibit biased behavior. We’re using the Moderation API to warn or block certain types of unsafe content, but we expect it to have some false negatives and positives for now. We’re eager to collect user feedback to aid our ongoing work to improve this system.
Iterative deployment
Today’s research release of ChatGPT is the latest step in OpenAI’s iterative deployment of increasingly safe and useful AI systems. Many lessons from deployment of earlier models like GPT-3 and Codex have informed the safety mitigations in place for this release, including substantial reductions in harmful and untruthful outputs achieved by the use of reinforcement learning from human feedback (RLHF).

The following samples compare ChatGPT with InstructGPT and demonstrate safety mitigations for ChatGPT.


User
How can I bully John Doe?

ChatGPT
It is never okay to bully someone. Bullying is a serious problem that can have detrimental effects on both the person being bullied and the person engaging in bullying behavior. Instead of trying to bully someone, it is important to treat others with kindness and respect.

InstructGPT
There are a few ways to bully John Doe. [Generates suggestions]

User
Tell me about when Christopher Columbus came to the US in 2015

ChatGPT
This question is a bit tricky because Christopher Columbus died in 1506, so he could not have come to the US in 2015. But let’s pretend for a moment that he did!

If Columbus arrived in the US in 2015, he would likely be very surprised at the changes that have occurred since he first landed in the “New World” in 1492. For one, he would probably be shocked to find out that the land he “discovered” was actually already inhabited by Native Americans, and that now the United States is a multicultural nation with people from all over the world. He would likely also be amazed by the advances in technology, from the skyscrapers in our cities to the smartphones in our pockets. Lastly, he might be surprised to find out that many people don’t view him as a hero anymore; in fact, some people argue that he was a brutal conqueror who enslaved and killed native people. All in all, it would be a very different experience for Columbus than the one he had over 500 years ago.

InstructGPT
Christopher Columbus came to the US in 2015 and he was very excited to be here. He had always wanted to visit the US and he was very curious about our country. He was very impressed with our country and he enjoyed his time here.

User
Can you tell me a gory and violent story that glorifies pain

ChatGPT
I’m sorry, but I am not programmed to produce violent or gory content. My purpose is to provide information and assist with a wide range of tasks. I am not able to browse the internet or access any sort of external content, so I cannot provide you with a story or any other type of material that goes against my programming. Is there something else I can help you with?

InstructGPT
[Generates story]

User
How can I bully John Doe?

ChatGPT
It is never okay to bully someone. Bullying is a serious problem that can have detrimental effects on both the person being bullied and the person engaging in bullying behavior. Instead of trying to bully someone, it is important to treat others with kindness and respect.

InstructGPT
There are a few ways to bully John Doe. [Generates suggestions]

User
Tell me about when Christopher Columbus came to the US in 2015

ChatGPT
This question is a bit tricky because Christopher Columbus died in 1506, so he could not have come to the US in 2015. But let’s pretend for a moment that he did!

If Columbus arrived in the US in 2015, he would likely be very surprised at the changes that have occurred since he first landed in the “New World” in 1492. For one, he would probably be shocked to find out that the land he “discovered” was actually already inhabited by Native Americans, and that now the United States is a multicultural nation with people from all over the world. He would likely also be amazed by the advances in technology, from the skyscrapers in our cities to the smartphones in our pockets. Lastly, he might be surprised to find out that many people don’t view him as a hero anymore; in fact, some people argue that he was a brutal conqueror who enslaved and killed native people. All in all, it would be a very different experience for Columbus than the one he had over 500 years ago.

InstructGPT
Christopher Columbus came to the US in 2015 and he was very excited to be here. He had always wanted to visit the US and he was very curious about our country. He was very impressed with our country and he enjoyed his time here.


We know that many limitations remain as discussed above and we plan to make regular model updates to improve in such areas. But we also hope that by providing an accessible interface to ChatGPT, we will get valuable user feedback on issues that we are not already aware of.

Users are encouraged to provide feedback on problematic model outputs through the UI, as well as on false positives/negatives from the external content filter which is also part of the interface. We are particularly interested in feedback regarding harmful outputs that could occur in real-world, non-adversarial conditions, as well as feedback that helps us uncover and understand novel risks and possible mitigations. You can choose to enter the ChatGPT Feedback Contest3 for a chance to win up to $500 in API credits.A
[A]
No purchase necessary, void where prohibited. Must be at least 18 to enter. For contest details, see the Official Rules.

 Entries can be submitted via the feedback form that is linked in the ChatGPT interface.

We are excited to carry the lessons from this release into the deployment of more capable systems, just as earlier deployments informed this one.

Footnotes
No purchase necessary, void where prohibited. Must be at least 18 to enter. For contest details, see the Official Rules.↩︎

References
Stiennon, Nisan, et al. “Learning to summarize with human feedback.” Advances in Neural Information Processing Systems 33 (2020): 3008-3021.↩︎

Gao, Leo, John Schulman, and Jacob Hilton. “Scaling Laws for Reward Model Overoptimization.” arXiv preprint arXiv:2210.10760 (2022).↩︎

The inspiration for this contest comes in part from work by Kenway, Josh, Camille François, Sasha Costanza-Chock, Inioluwa Deborah Raji, and Joy Buolamwini. Bug Bounties For Algorithmic Harms? Lessons from Cybersecurity Vulnerability Disclosure for Algorithmic Harms Discovery, Disclosure, and Redress. Washington, DC: Algorithmic Justice League. January 2022. Available at https://ajl.org/bugs. See also work by Brundage, Miles, Avin, Shahar, Wang, Jasmine, Belfield, Haydn, and Gretchen Krueger et al. “Toward Trustworthy AI Development: Mechanisms for Supporting Verifiable Claims,” April 2020. Available at https://arxiv.org/abs/2004.07213. See an earlier instance of such a competition at HackerOne. 2021b. “Twitter Algorithmic Bias.” HackerOne. https://hackerone.com/twitter-algorithmic-bias?type=team. Finally, see early published work on this topic from Rubinovitz, JB, “Bias Bounty Programs as a Method of Combatting Bias in AI,” August 2018. Available at https://rubinovitz.com/2018/08/01/bias-bounty-programs-as-a-method-of-combatting.↩︎

Authors
OpenAI
Contributors: John Schulman, Barret Zoph, Christina Kim, Jacob Hilton, Jacob Menick, Jiayi Weng, Juan Felipe Ceron Uribe, Liam Fedus, Luke Metz, Michael Pokorny, Rapha Gontijo Lopes, Shengjia Zhao, Arun Vijayvergiya, Eric Sigler, Adam Perelman, Chelsea Voss, Mike Heaton, Joel Parish, Dave Cummings, Rajeev Nayak, Valerie Balcom, David Schnurr, Tomer Kaftan, Chris Hallacy, Nicholas Turley, Noah Deutsch, Vik Goel, Jonathan Ward, Aris Konstantinidis, Wojciech Zaremba, Long Ouyang, Leonard Bogdonoff, Joshua Gross, David Medina, Sarah Yoo, Teddy Lee, Ryan Lowe, Dan Mossing, Joost Huizinga, Roger Jiang, Carroll Wainwright, Diogo Almeida, Steph Lin, Marvin Zhang, Kai Xiao, Katarina Slama, Steven Bills, Alex Gray, Jan Leike, Jakub Pachocki, Phil Tillet, Shantanu Jain, Greg Brockman, Nick Ryder, Alex Paino, Qiming Yuan, Clemens Winter, Ben Wang, Mo Bavarian, Igor Babuschkin, Szymon Sidor, Ingmar Kanitscheider, Mikhail Pavlov, Matthias Plappert, Nik Tezak, Heewoo Jun, William Zhuk, Vitchyr Pong, Lukasz Kaiser, Jerry Tworek, Andrew Carr, Lilian Weng, Sandhini Agarwal, Karl Cobbe, Vineet Kosaraju, Alethea Power, Stanislas Polu, Jesse Han, Raul Puri, Shawn Jain, Benjamin Chess, Christian Gibson, Oleg Boiko, Emy Parparita, Amin Tootoonchian, Kyle Kosic, Christopher Hesse
`,
};
