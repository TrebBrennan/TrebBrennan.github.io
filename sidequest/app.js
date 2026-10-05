const TASKS = Object.freeze([
  { id: 1, text: "Take a different route home." },
  { id: 2, text: "Visit a cafe you've never been to." },
  { id: 3, text: "Go to bed 30 minutes earlier than usual." },
  { id: 4, text: "Watch a show you wouldn't normally choose." },
  { id: 5, text: "Eat a fruit you've never eaten." },
  { id: 6, text: "Listen to an album released before you were born." },
  { id: 7, text: "Take a photograph of something blue." },
  { id: 8, text: "Call someone instead of messaging them." },
  { id: 9, text: "Order something beside your usual choice." },
  { id: 10, text: "Leave your headphones at home." },
  { id: 11, text: "Go into a shop you've never had a reason to enter." },
  { id: 12, text: "Sit somewhere you've never sat before." },
  { id: 13, text: "Walk one block farther than you normally would." },
  { id: 14, text: "Read about the nearest town you've never visited." },
  { id: 15, text: "Eat one meal somewhere different." },
  { id: 16, text: "Take a photo of an ordinary thing like it's important." },
  { id: 17, text: "Spend ten minutes outside without your phone." },
  { id: 18, text: "Try a drink you've never ordered before." },
  { id: 19, text: "Listen to a radio station you've never used." },
  { id: 20, text: "Walk down a street you've never taken." },
  { id: 21, text: "Notice a building you've never paid attention to before." },
  { id: 22, text: "Take a five-minute detour for no practical reason." },
  { id: 23, text: "Stand outside for a minute and listen for the farthest sound you can hear." },
  { id: 24, text: "Find a street name you've never noticed before." },
  { id: 25, text: "Look up at the tops of buildings instead of the shopfronts." },
  { id: 26, text: "Take a photo of something yellow." },
  { id: 27, text: "Find the oldest-looking object in your home." },
  { id: 28, text: "Walk through a park you normally pass by." },
  { id: 29, text: "Choose the longest way to get somewhere today." },
  { id: 30, text: "Sit outside for one part of your lunch break." },
  { id: 31, text: "Research a significant event that happened on your birthday." },
  { id: 32, text: "Take a photo of a reflection." },
  { id: 33, text: "Look for three things you've never noticed on your usual route." },
  { id: 34, text: "Step into a public building you've never entered before." },
  { id: 35, text: "Find a view of your neighborhood from a different angle." },
  { id: 36, text: "Take a short walk after dinner." },
  { id: 37, text: "Spend five minutes watching the sky." },
  { id: 38, text: "Look for a house or building you'd like to live in." },
  { id: 39, text: "Find a sign with unusual wording." },
  { id: 40, text: "Take a photo of something symmetrical." },
  { id: 41, text: "Walk through an alley, arcade, or side passage you've never used." },
  { id: 42, text: "Visit the nearest park you haven't been to." },
  { id: 43, text: "Find a public bench with the best view you can." },
  { id: 44, text: "Look for a tiny detail on a building that seems decorative for no reason." },
  { id: 45, text: "Take a photo of something red." },
  { id: 46, text: "Find the quietest place you can within ten minutes of home." },
  { id: 47, text: "Go outside at a time you normally stay indoors." },
  { id: 48, text: "Walk around one familiar block in the opposite direction." },
  { id: 49, text: "Look for an old advertisement, sign, or faded logo." },
  { id: 50, text: "Find something in your neighborhood that looks out of place." },
  { id: 51, text: "Watch the sunset from somewhere different." },
  { id: 52, text: "Visit a lookout, hill, bridge, or high point nearby." },
  { id: 53, text: "Take a photo of something green." },
  { id: 54, text: "Find a shortcut you've never tried." },
  { id: 55, text: "Spend five minutes somewhere busy without doing anything." },
  { id: 56, text: "Look for an interesting front door." },
  { id: 57, text: "Walk past your usual destination and see what's beyond it." },
  { id: 58, text: "Find the smallest public space near you." },
  { id: 59, text: "Take a photo of something with a strong shadow." },
  { id: 60, text: "Look for a street you've never noticed on a map, then go see it." },
  { id: 61, text: "Walk until you find something worth photographing." },
  { id: 62, text: "Find a place nearby that feels strangely empty." },
  { id: 63, text: "Notice five different kinds of trees or plants." },
  { id: 64, text: "Find an ant and follow it for awhile." },
  { id: 65, text: "Find the oldest-looking building on your route today." },
  { id: 66, text: "Stand somewhere you normally only pass through." },
  { id: 67, text: "Visit a destination by pointing at a nearby map." },
  { id: 68, text: "Walk to the end of a street you've never followed all the way." },
  { id: 69, text: "Find a mural, sticker, or piece of street art you've never seen." },
  { id: 70, text: "Take a photo of something orange." },
  { id: 71, text: "Try a snack you've never bought before." },
  { id: 72, text: "Buy the cheapest unfamiliar item in a bakery or grocery store." },
  { id: 73, text: "Talk to someone you wouldn't normally talk to." },
  { id: 74, text: "Eat breakfast for dinner, or dinner for breakfast." },
  { id: 75, text: "Try a food from a country you know little about." },
  { id: 76, text: "Make one meal without using your usual seasoning." },
  { id: 77, text: "Buy something from the international aisle you've never tried." },
  { id: 78, text: "Choose the weirdest flavor of something familiar." },
  { id: 79, text: "Eat a meal with no screens nearby." },
  { id: 80, text: "Try a different brand of something you buy regularly." },
  { id: 81, text: "Order the smallest thing on a menu you've never tried." },
  { id: 82, text: "Make a sandwich you've never made before." },
  { id: 83, text: "Eat one thing with chopsticks that you normally wouldn't." },
  { id: 84, text: "Choose a snack based entirely on its packaging." },
  { id: 85, text: "Try a condiment you've ignored for years." },
  { id: 86, text: "Drink your usual drink from a different kind of cup or glass." },
  { id: 87, text: "Make a meal from ingredients you already have but rarely use." },
  { id: 88, text: "Buy one vegetable you don't normally cook." },
  { id: 89, text: "Try a new flavor of drink." },
  { id: 90, text: "Choose a dessert you've never ordered." },
  { id: 91, text: "Eat one meal outside if the weather allows." },
  { id: 92, text: "Pick a recipe because you already own most of the ingredients." },
  { id: 93, text: "Try a different cheese than your usual." },
  { id: 94, text: "Make a hot drink you haven't had in a long time." },
  { id: 95, text: "Buy one thing from a local shop instead of a supermarket." },
  { id: 96, text: "Choose the second-most appealing item instead of your first choice." },
  { id: 97, text: "Eat at a different time than usual." },
  { id: 98, text: "Research what's common for breakfast in another country." },
  { id: 99, text: "Use a fruit you normally eat raw in a cooked dish." },
  { id: 100, text: "Have a meal made entirely from leftovers." },
  { id: 101, text: "Listen to the first album recommended to you by your music app." },
  { id: 102, text: "Play a song from a genre you usually avoid." },
  { id: 103, text: "Listen to an album all the way through without shuffling." },
  { id: 104, text: "Play the oldest song in your saved music." },
  { id: 105, text: "Listen to a soundtrack from a film you haven't seen." },
  { id: 106, text: "Listen to music in a language you don't speak." },
  { id: 107, text: "Put on an artist with fewer listeners than your usual favorites." },
  { id: 108, text: "Listen to one full classical piece." },
  { id: 109, text: "Find a song released exactly ten years ago." },
  { id: 110, text: "Listen to the first record by an artist you like." },
  { id: 111, text: "Play a song you loved as a teenager." },
  { id: 112, text: "Listen to a live version instead of the studio version." },
  { id: 113, text: "Choose music based only on the album cover." },
  { id: 114, text: "Listen to a local artist you've never heard before." },
  { id: 115, text: "Play one song recommended by someone else." },
  { id: 116, text: "Listen to a genre from a country you know little about." },
  { id: 117, text: "Watch the first episode of a series you've always ignored." },
  { id: 118, text: "Watch a short film instead of a full-length movie." },
  { id: 119, text: "Watch something made before 1970." },
  { id: 120, text: "Watch a film from a country you've never seen a film from." },
  { id: 121, text: "Watch one documentary about an ordinary subject." },
  { id: 122, text: "Watch a movie without checking its reviews first." },
  { id: 123, text: "Rewatch something you loved as a child." },
  { id: 124, text: "Watch one episode of a show from the middle of its run." },
  { id: 125, text: "Read the first page of a book you've never opened." },
  { id: 126, text: "Read ten pages of a book outside your usual genre." },
  { id: 127, text: "Read a poem by someone you've never heard of." },
  { id: 128, text: "Read a magazine or newspaper section you normally skip." },
  { id: 129, text: "Pick a book from a shelf based only on its title." },
  { id: 130, text: "Read the oldest unread article you've saved." },
  { id: 131, text: "Learn one fact about a subject you've never cared about." },
  { id: 132, text: "Look up the history of something you use every day." },
  { id: 133, text: "Read about the origin of your street's name." },
  { id: 134, text: "Find out who designed a building you like." },
  { id: 135, text: "Learn what bird you heard most recently." },
  { id: 136, text: "Look up the meaning of a place name near you." },
  { id: 137, text: "Find out what was happening in your town 50 years ago." },
  { id: 138, text: "Read about a random year between 1900 and 1999." },
  { id: 139, text: "Learn the name of one constellation visible tonight." },
  { id: 140, text: "Find out where one item in your kitchen was made." },
  { id: 141, text: "Read the Wikipedia page for the nearest river, hill, or landmark." },
  { id: 142, text: "Learn one word in a language you don't speak." },
  { id: 143, text: "Find out how one everyday object is manufactured." },
  { id: 144, text: "Read about a job you've never understood." },
  { id: 145, text: "Learn the name of a plant you see all the time." },
  { id: 146, text: "Find out what the weather was like on the day you were born." },
  { id: 147, text: "Send someone a photo instead of a text reply." },
  { id: 148, text: "Message someone you haven't spoken to in a few months." },
  { id: 149, text: "Ask someone what they've been listening to lately." },
  { id: 150, text: "Give someone a specific compliment." },
  { id: 151, text: "Send someone a song you think they'd like." },
  { id: 152, text: "Ask a friend a question you normally wouldn't think to ask." },
  { id: 153, text: "Thank someone for something small they probably forgot doing." },
  { id: 154, text: "Reply to an old message you meant to answer." },
  { id: 155, text: "Ask someone for a recommendation and actually try it." },
  { id: 156, text: "Tell someone about something funny you noticed today." },
  { id: 157, text: "Send a long-form email to a loved one." },
  { id: 158, text: "Ask someone what their first job was." },
  { id: 159, text: "Let someone else choose where to eat or what to watch." },
  { id: 160, text: "Ask someone what they're looking forward to next week." },
  { id: 161, text: "Send someone a photo of something that reminded you of them." },
  { id: 162, text: "Introduce yourself to someone you see often but don't know." },
  { id: 163, text: "Ask a shopkeeper or barista what they recommend." },
  { id: 164, text: "Tell someone you like something they're wearing." },
  { id: 165, text: "Ask a family member a question about their childhood." },
  { id: 166, text: "Send a voice message instead of typing." },
  { id: 167, text: "Invite someone on a short walk." },
  { id: 168, text: "Share a useful link with someone who would genuinely appreciate it." },
  { id: 169, text: "Ask someone what the best thing they ate recently was." },
  { id: 170, text: "Text someone a memory you randomly remembered." },
  { id: 171, text: "Ask someone for their favorite local place." },
  { id: 172, text: "Call a relative you haven't spoken to recently." },
  { id: 173, text: "Ask someone what they would do with a completely free afternoon." },
  { id: 174, text: "Say yes to one small invitation you'd usually decline." },
  { id: 175, text: "Start one conversation without talking about work." },
  { id: 176, text: "Ask someone what book, film, or game they wish they could experience again for the first time." },
  { id: 177, text: "Tell someone about a place you think they'd like." },
  { id: 178, text: "Ask someone what they've changed their mind about lately." },
  { id: 179, text: "Send a thank-you message without waiting for a reason." },
  { id: 180, text: "Ask someone what their current small obsession is." },
  { id: 181, text: "Recommend something you genuinely love to one person." },
  { id: 182, text: "Buy or make someone a small treat for no occasion." },
  { id: 183, text: "Ask someone to choose between two options for you." },
  { id: 184, text: "Wait somewhere without a phone or device out." },
  { id: 185, text: "Ask someone what they did last weekend instead of asking how they are." },
  { id: 186, text: "Message the first person who comes to mind when you hear an old song." },
  { id: 187, text: "Ask someone what skill they'd learn if it took only a day." },
  { id: 188, text: "Leave a positive review for a place you genuinely like." },
  { id: 189, text: "Tell someone when they made your day easier." },
  { id: 190, text: "Ask someone for a local recommendation you've never tried." },
  { id: 191, text: "Say hello to a neighbor you normally only nod at." },
  { id: 192, text: "Text a friend, describing the strangest thing you saw today." },
  { id: 193, text: "Draw an object near you without erasing anything." },
  { id: 194, text: "Take five photos of the same object from different angles." },
  { id: 195, text: "Write a six-word story about your day." },
  { id: 196, text: "Make a tiny playlist of exactly five songs." },
  { id: 197, text: "Photograph something that looks like a face." },
  { id: 198, text: "Write down an overheard phrase without context." },
  { id: 199, text: "Sketch the view from where you're sitting." },
  { id: 200, text: "Take a photo that uses a doorway as a frame." },
  { id: 201, text: "Write an imagined positive headline about your future." },
  { id: 202, text: "Make up a name for a color you see." },
  { id: 203, text: "Take a photo of something that looks cinematic." },
  { id: 204, text: "Write one sentence about a stranger you noticed, entirely fictional." },
  { id: 205, text: "Photograph the same place twice, several hours apart." },
  { id: 206, text: "Write a list of ten things you can hear from your home." },
  { id: 207, text: "Draw a map from memory of somewhere familiar." },
  { id: 208, text: "Take a photo with no people and no sky in it." },
  { id: 209, text: "Write a one-sentence review of a good thing in your day." },
  { id: 210, text: "Photograph a texture you like." },
  { id: 211, text: "Make a three-song soundtrack for your afternoon." },
  { id: 212, text: "Write down five objects you can see and invent a story connecting them." },
  { id: 213, text: "Take a photo of something perfectly ordinary in dramatic lighting." },
  { id: 214, text: "Draw your room as if it were a game level." },
  { id: 215, text: "Write a tiny poem about something boring." },
  { id: 216, text: "Photograph something through glass." },
  { id: 217, text: "Make a list of five things that feel very specific about where you live." },
  { id: 218, text: "Take a photo where the main subject is very small in the frame." },
  { id: 219, text: "Write down one question you genuinely don't know the answer to." },
  { id: 220, text: "Draw an object using your non-dominant hand." },
  { id: 221, text: "Take a photo using only reflections." },
  { id: 222, text: "Write a fake product description for something on your desk." },
  { id: 223, text: "Make up a backstory for an abandoned or forgotten object." },
  { id: 224, text: "Photograph three things that share the same color." },
  { id: 225, text: "Write one line of dialogue you would love to hear." },
  { id: 226, text: "Take a photo with an intentionally crooked horizon." },
  { id: 227, text: "Invent a name for a shop you pass." },
  { id: 228, text: "Write a postcard-length description of your neighborhood." },
  { id: 229, text: "Take one black-and-white photo." },
  { id: 230, text: "Make a list of five things you noticed because you slowed down." },
  { id: 231, text: "Draw something in under sixty seconds." },
  { id: 232, text: "Write a short note to your future self and hide it somewhere." },
  { id: 233, text: "Photograph something that looks much bigger or smaller than it really is." },
  { id: 234, text: "Create a tiny still life from three nearby objects." },
  { id: 235, text: "Write a two-line scene set in the place you're currently in." },
  { id: 236, text: "Take a photo of the most boring object you can find." },
  { id: 237, text: "Invent a movie title for your day." },
  { id: 238, text: "Make a list of things you would put in a time capsule from today." },
  { id: 239, text: "Look up, and use a word you would rarely use." },
  { id: 240, text: "Take a photo that has exactly one strong color in it." },
  { id: 241, text: "Photograph something from knee height." },
  { id: 242, text: "Invent three fictional names for a familiar place." },
  { id: 243, text: "Take a photo of something worn, chipped, faded, or repaired." },
  { id: 244, text: "Spend ten minutes doing nothing while a kettle, timer, or song plays." },
  { id: 245, text: "Leave your phone in another room during one meal." },
  { id: 246, text: "Take one short trip without checking maps unless you need them." },
  { id: 247, text: "Do one routine task in a different order." },
  { id: 248, text: "Use the stairs instead of the lift once today." },
  { id: 249, text: "Stand up and stretch during something you'd normally sit through." },
  { id: 250, text: "Carry no bag for one short outing if you don't need one." },
  { id: 251, text: "Spend fifteen minutes tidying a place you usually ignore." },
  { id: 252, text: "Do one household task without listening to anything." },
  { id: 253, text: "Take a shower at a different time than usual." },
  { id: 254, text: "Move one piece of furniture or decor to a new spot." },
  { id: 255, text: "Use a different mug, plate, or bowl than your usual." },
  { id: 256, text: "Wear an item of clothing you haven't worn in months." },
  { id: 257, text: "Choose your clothes based on one color you rarely wear." },
  { id: 258, text: "Leave one unnecessary device switched off for the evening." },
  { id: 259, text: "Take a twenty-minute break from all screens." },
  { id: 260, text: "Do one errand on foot if it's reasonably walkable." },
  { id: 261, text: "Sit on the floor for ten minutes instead of a chair or sofa." },
  { id: 262, text: "Spend ten minutes with the lights dimmer than usual." },
  { id: 263, text: "Open a window for a while and pay attention to the sounds outside." },
  { id: 264, text: "Do one thing more slowly than usual on purpose." },
  { id: 265, text: "Take a different seat at your desk or table." },
  { id: 266, text: "Use your non-dominant hand for one simple routine task." },
  { id: 267, text: "Eat one meal slowly, without rushing." },
  { id: 268, text: "Put your phone on silent for one hour." },
  { id: 269, text: "Take your shoes off somewhere you normally keep them on, if appropriate." },
  { id: 270, text: "Do one small task immediately instead of adding it to a list." },
  { id: 271, text: "Choose one room and remove 3 things that don't belong there." },
  { id: 272, text: "Spend a few minutes cleaning an object you normally never clean." },
  { id: 273, text: "Do one everyday task outdoors if practical." },
  { id: 274, text: "Take a break somewhere other than your usual spot." },
  { id: 275, text: "Turn off autoplay for the evening." },
  { id: 276, text: "Leave one light off that you usually switch on automatically." },
  { id: 277, text: "Spend one hour without checking the time." },
  { id: 278, text: "Use a paper note instead of your phone for one reminder." },
  { id: 279, text: "Take a deliberately slow walk for ten minutes." },
  { id: 280, text: "Do one small chore you've been putting off." },
  { id: 281, text: "Change your phone wallpaper to a photo you took yourself." },
  { id: 282, text: "Rearrange the apps on your home screen to avoid bad habits." },
  { id: 283, text: "Delete five screenshots or photos you don't need." },
  { id: 284, text: "Unsubscribe from one email you never read." },
  { id: 285, text: "Clear one small drawer, shelf, or folder." },
  { id: 286, text: "Rename a badly named file or folder." },
  { id: 287, text: "Back up one thing you'd be annoyed to lose." },
  { id: 288, text: "Print or save one photo you actually like." },
  { id: 289, text: "Set one device to grayscale for an hour." },
  { id: 290, text: "Turn off one notification you don't need." },
  { id: 291, text: "Spend ten minutes sorting old photos." },
  { id: 292, text: "Read your oldest note in your notes app." },
  { id: 293, text: "Open a folder on a device you haven't looked at in a year." },
  { id: 294, text: "Find the oldest photo on your phone you still like." },
  { id: 295, text: "Change one password you've reused for too long." },
  { id: 296, text: "Remove one app you haven't used in months." },
  { id: 297, text: "Visit a library, even if you don't borrow anything." },
  { id: 298, text: "Go into a supermarket you don't normally use." },
  { id: 299, text: "Visit a suburb or neighborhood next to yours that you rarely enter." },
  { id: 300, text: "Stop at a park you've only ever driven past." },
  { id: 301, text: "Find a small local business you've never noticed before." },
  { id: 302, text: "Visit a secondhand shop and look for the strangest object." },
  { id: 303, text: "Go to a newsagent, bookshop, or stationery store and browse one unfamiliar section." },
  { id: 304, text: "Visit a public garden or green space you've never explored." },
  { id: 305, text: "Walk through a shopping center from a different entrance." },
  { id: 306, text: "Find a place nearby that sells something you've never bought." },
  { id: 307, text: "Visit a local market if one is open today." },
  { id: 308, text: "Go to a bakery or cafe you've passed but never tried." },
  { id: 309, text: "Find a small gallery, museum, or exhibit nearby and see what's on." },
  { id: 310, text: "Visit a train or bus stop you've never used and look around." },
  { id: 311, text: "Browse a shelf at the library chosen by a random number." },
  { id: 312, text: "Find the nearest place with public art." },
  { id: 313, text: "Go to a neighborhood you know only by name." },
  { id: 314, text: "Visit a store that specializes in one oddly specific thing." },
  { id: 315, text: "Look for the oldest shopfront in your local area." },
  { id: 316, text: "Find a local noticeboard and read everything pinned to it." },
  { id: 317, text: "Visit somewhere nearby you've only seen at night, during the day, or vice versa." },
  { id: 318, text: "Find a bridge you've never walked across." },
  { id: 319, text: "Go to the nearest body of water you don't usually visit." },
  { id: 320, text: "Visit a place within fifteen minutes of home that feels completely different." },
  { id: 321, text: "Find a public path or trail you've never followed." },
  { id: 322, text: "Go somewhere nearby because you like its name." },
  { id: 323, text: "Visit a street with a name that makes you curious." },
  { id: 324, text: "Find a local business that is older than you." },
  { id: 325, text: "Take public transport for one stop beyond where you'd normally get off." },
  { id: 326, text: "Get off one stop early and walk the rest of the way." },
  { id: 327, text: "Choose a nearby destination based on the first letter of your name." },
  { id: 328, text: "Visit the nearest place on the map you've never heard of." },
  { id: 329, text: "Walk to somewhere you normally drive to, if practical." },
  { id: 330, text: "Find a local business with fewer than ten reviews and check it out." },
  { id: 331, text: "Visit a small park instead of a major one." },
  { id: 332, text: "Go to a part of town you normally pass through without stopping." },
  { id: 333, text: "Find a place nearby with a view you didn't know existed." },
  { id: 334, text: "Look for a plaque, memorial, or historical marker and read it." },
  { id: 335, text: "Visit the closest street to you that starts with same letter as your first name." },
  { id: 336, text: "Find somewhere nearby that is open later than you expected." },
  { id: 337, text: "Go into a shop and buy nothing; just notice what they sell." },
  { id: 338, text: "Find a place nearby where you can hear running water." },
  { id: 339, text: "Visit a place you've been meaning to check out for months." },
  { id: 340, text: "Choose a random direction and walk for ten minutes before turning back." },
  { id: 341, text: "Find the most unusual mailbox you can within walking distance." },
  { id: 342, text: "Look for an animal you don't usually notice." },
  { id: 343, text: "Count how many different birds you see in ten minutes." },
  { id: 344, text: "Find three objects shaped like circles outdoors." },
  { id: 345, text: "Look for an object that is older than you are." },
  { id: 346, text: "Find something with handwriting on it." },
  { id: 347, text: "Find a number larger than 1000 somewhere in public." },
  { id: 348, text: "Look for something that has been repaired instead of replaced." },
  { id: 349, text: "Find a word you've never seen on a sign before." },
  { id: 350, text: "Notice the first smell that makes you think of a specific memory." },
  { id: 351, text: "Find something that makes a repeating sound." },
  { id: 352, text: "Look for a tiny object someone probably dropped." },
  { id: 353, text: "Find a pattern that wasn't intentionally designed." },
  { id: 354, text: "Look for evidence that an animal was there before you." },
  { id: 355, text: "Find a place where two very different architectural styles meet." },
  { id: 356, text: "Notice the color of every front door on one block." },
  { id: 357, text: "Find an object with more than three different materials in it." },
  { id: 358, text: "Look for the oldest car you see today." },
  { id: 359, text: "Spend time with someone you care about." },
  { id: 360, text: "Look for an object whose purpose you can't immediately guess." },
  { id: 361, text: "Find something that has clearly changed color with age." },
  { id: 362, text: "Notice a sound you usually tune out." },
  { id: 363, text: "Find something handmade." },
  { id: 364, text: "Look for a plant growing somewhere it probably shouldn't." },
  { id: 365, text: "Find a piece of public infrastructure you've never thought about before." }  
]);

const STORAGE_KEY = "scavenger-state-v1";
const SKIP_COST = 4;
const CHECK_INTERVAL_MS = 60 * 1000;

const els = {
  body: document.querySelector("body"),
  dateLine: document.querySelector("#dateLine"),
  streak: document.querySelector("#streak"),
  bestStreak: document.querySelector("#bestStreak"),
  taskCard: document.querySelector("#taskCard"),
  taskText: document.querySelector("#taskText"),
  actions: document.querySelector("#actions"),
  doneButton: document.querySelector("#doneButton"),
  skipButton: document.querySelector("#skipButton"),
  credits: document.querySelector("#credits"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  clearHistoryButton: document.querySelector("#clearHistoryButton"),
  settingsStatus: document.querySelector("#settingsStatus")
};

let state = loadState();

function defaultState() {
  return {
    points: 0,
    totalEarned: 0,
    streak: 0,
    bestStreak: 0,
    lastCompletedDate: null,
    activeDate: null,
    activeTaskId: null,
    completedToday: false,
    revealedToday: false,
    skippedToday: 0
  };
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const loaded = { ...defaultState(), ...(stored || {}) };
    // Discard the old shuffled deck while preserving credits and streaks.
    delete loaded.remainingTaskIds;
    return loaded;
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(key) {
  if (!key) return null;
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dayDifference(fromKey, toKey) {
  const from = dateFromKey(fromKey);
  const to = dateFromKey(toKey);
  if (!from || !to) return null;

  const fromUtc = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const toUtc = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());

  return Math.round((toUtc - fromUtc) / 86400000);
}

function dayOfYear(date = new Date()) {
  // Use local calendar components with UTC arithmetic to avoid DST offsets.
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const yearStart = Date.UTC(date.getFullYear(), 0, 1);
  return Math.floor((today - yearStart) / 86400000) + 1;
}

function scheduledTaskId(date = new Date()) {
  // Day 366 wraps to task 1; paid skips advance through the same ordered list.
  const index = (dayOfYear(date) - 1 + state.skippedToday) % TASKS.length;
  return TASKS[index].id;
}

function getActiveTask() {
  return TASKS.find(task => task.id === state.activeTaskId) || TASKS[0];
}

function checkForNewDay() {
  const now = new Date();
  const today = localDateKey(now);

  if (!state.activeDate) {
    state.activeDate = today;
    state.completedToday = false;
    state.revealedToday = false;
    state.skippedToday = 0;
    state.activeTaskId = scheduledTaskId(now);
    saveState();
    return;
  }

  if (state.activeDate === today) {
    const taskId = scheduledTaskId(now);
    if (state.activeTaskId !== taskId) {
      state.activeTaskId = taskId;
      saveState();
    }
    return;
  }

  const daysSinceCompletion = dayDifference(state.lastCompletedDate, today);

  if (daysSinceCompletion !== 1) {
    state.streak = 0;
  }

  state.activeDate = today;
  state.completedToday = false;
  state.revealedToday = false;
  state.skippedToday = 0;
  state.activeTaskId = scheduledTaskId(now);
  saveState();
}

function revealTask() {
  checkForNewDay();

  if (state.revealedToday) return;

  state.revealedToday = true;
  saveState();
  render();
}

function playCompletionAnimation() {
  // The revealed card is already at 180deg.
  // Spin one full extra turn so it finishes back on the task face at 540deg.
  els.taskCard.classList.remove("completion-spin");
  void els.taskCard.offsetWidth;
  els.taskCard.classList.add("completion-spin");
}

function completeTask() {
  checkForNewDay();

  if (!state.revealedToday || state.completedToday) return;

  const today = localDateKey();
  const daysSinceCompletion = dayDifference(state.lastCompletedDate, today);

  if (daysSinceCompletion === 1) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }

  state.bestStreak = Math.max(state.bestStreak, state.streak);
  state.lastCompletedDate = today;
  state.completedToday = true;
  state.points += 1;
  state.totalEarned += 1;

  saveState();
  render();
  playCompletionAnimation();
}

function skipTask() {
  checkForNewDay();

  if (!state.revealedToday || state.completedToday || state.points < SKIP_COST) {
    return;
  }

  state.points -= SKIP_COST;
  state.skippedToday += 1;
  state.activeTaskId = scheduledTaskId();
  state.revealedToday = false;

  saveState();
  render();
}

function formatToday() {
  const now = new Date();

  const weekday = new Intl.DateTimeFormat(undefined, {
    weekday: "long"
  }).format(now);

  const date = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "long"
  }).format(now);

  return `${weekday} · ${date}`.toUpperCase();
}

function openSettings() {
  els.settingsStatus.textContent = "";
  els.settingsDialog.showModal();
}

function clearHistory() {
  localStorage.clear();
  state = defaultState();
  els.taskCard.classList.remove("completion-spin");
  render();
  els.settingsStatus.textContent = "History cleared. You're ready for a fresh start.";
}

function render() {
  checkForNewDay();

  const task = getActiveTask();

  els.dateLine.textContent = formatToday();
  els.streak.textContent = `STREAK: DAY ${state.streak}`;
  els.bestStreak.textContent = `BEST ${state.bestStreak}`;
  els.taskText.textContent = task.text;
  els.credits.textContent = `${state.points} ${state.points === 1 ? "CREDIT" : "CREDITS"}`;

  els.taskCard.classList.toggle("revealed", state.revealedToday);
  els.body.classList.toggle("completed", state.completedToday);
  els.actions.classList.toggle("visible", state.revealedToday);

  els.taskCard.setAttribute(
    "aria-label",
    state.revealedToday ? "Today's task revealed" : "Reveal today's task"
  );

  els.doneButton.disabled = state.completedToday;
  els.doneButton.textContent = state.completedToday ? "DONE" : "I DID IT";

  els.skipButton.disabled =
    state.completedToday ||
    state.points < SKIP_COST;

  els.skipButton.textContent = `SKIP −${SKIP_COST} CREDITS`;
}

els.taskCard.addEventListener("animationend", (event) => {
  if (event.animationName === "completionSpin") {
    els.taskCard.classList.remove("completion-spin");
  }
});

els.taskCard.addEventListener("click", revealTask);
els.doneButton.addEventListener("click", completeTask);
els.skipButton.addEventListener("click", skipTask);
els.settingsButton.addEventListener("click", openSettings);
els.closeSettingsButton.addEventListener("click", () => els.settingsDialog.close());
els.clearHistoryButton.addEventListener("click", clearHistory);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) render();
});
window.addEventListener("focus", render);

checkForNewDay();
render();
setInterval(render, CHECK_INTERVAL_MS);
