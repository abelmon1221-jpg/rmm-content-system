'use strict';

// ═══════════════════════════════════════════════════════════════════════════════
// EMBEDDED DATA  (works with file:// — no server required)
// ═══════════════════════════════════════════════════════════════════════════════

const CTA_BANK = {
  primary:[
    'Comment RESUME and I\'ll send the free starter checklist.',
    'Want the free checklist? Comment RESUME.',
    'Comment RESUME and I\'ll send the simple version.',
    'Comment RESUME and I\'ll send the cleanup checklist.',
    'Want to see the process? Comment RESUME.'
  ],
  checklist:[
    'The checklist breaks this down step by step. Comment RESUME.',
    'Want the starter checklist? Comment RESUME.',
    'Comment RESUME and I\'ll send the beginner checklist.',
    'If this makes sense, comment RESUME and I\'ll send the checklist.'
  ],
  guideAware:[
    'The free checklist shows the basics. The full guide has the complete process.',
    'Start with the free checklist first. Comment RESUME.',
    'If the checklist clicks for you, the full $20 guide breaks down the whole method.'
  ],
  engagement:[
    'Would you offer this service? Comment yes or no.',
    'Would you pay someone to clean up your resume?',
    'What would you charge for this?',
    'Save this if you want a simple service idea.'
  ],
  avoid:[
    'Buy now','Link in bio','Start making money today',
    'This is your sign','Don\'t sleep on this',
    'This changed everything','Passive income starts here'
  ]
};

const DM_REPLIES = [
  {
    trigger:'After someone comments RESUME',
    reply:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
  },
  {
    trigger:'If they ask if this is real',
    reply:'Fair question. I would be skeptical too.\n\nIt is not a get-rich thing. People genuinely pay to have their resumes cleaned up, and AI makes the service easier to deliver.\n\nStart with the free checklist and judge it for yourself.'
  },
  {
    trigger:'If they ask how much they can make',
    reply:'I do not want to throw a random number at you because it depends on how many people you help and how consistent you are.\n\nWhat I can show you is the process.\n\nStart with the free checklist first and see if it feels like something you would actually do.'
  },
  {
    trigger:'If they ask if they need experience',
    reply:'No, that is the point.\n\nYou are not becoming a professional resume writer.\n\nYou are learning a simple resume cleanup process using AI tools.\n\nThe checklist shows the basic steps.'
  },
  {
    trigger:'If they ask what tools are used',
    reply:'The method uses Grok, ChatGPT, and Claude.\n\nGrok helps with job-market keywords.\n\nChatGPT helps with structure and bullet cleanup.\n\nClaude helps make the wording sound more natural.'
  },
  {
    trigger:'If they ask about the full guide',
    reply:'The free checklist gives you the starter version.\n\nThe full $20 guide breaks down the complete process, the tool stack, the prompt, how to find people, and how to deliver the cleaned-up resume.\n\nWant the link?'
  },
  {
    trigger:'If they go cold',
    reply:'No pressure. Try the checklist first.\n\nIf you get stuck or have questions, message me.'
  },
  {
    trigger:'If they say they have no money',
    reply:'Start with the free checklist first.\n\nYou do not need to buy anything just to understand the idea.\n\nIf it makes sense later, the full guide is there.'
  }
];

const LANDING_PAGE = [
  {label:'Headline', body:'People pay to have their resumes cleaned up. AI does the hard part. Here\'s the method.'},
  {label:'Subheadline', body:'A $20 guide that shows beginners how to offer AI-assisted resume cleanup as a simple service business.'},
  {label:'Skeptic Block', body:'This is not passive income.\n\nIt is not a get-rich scheme.\n\nIt is not about becoming a professional resume writer.\n\nIt is a simple service business where you help people clean up resumes using AI.\n\nNo fake income claims. No complicated online business. Just the process laid out clearly.'},
  {label:"What's Inside", body:'• The exact tool stack: Grok → ChatGPT → Claude\n• The resume cleanup process, step by step\n• The prompt that helps with the heavy lifting\n• How to find people who may need resume help\n• How to deliver the cleaned-up resume\n• How to price the service simply'},
  {label:'Who It Is For', body:'This is for beginner side hustlers who want a practical extra income idea without learning a complicated online business.\n\nIt is especially for adults who are skeptical of online money content and want something simple, understandable, and service-based.'},
  {label:'Who It Is NOT For', body:'This is not for people looking for a magic money system.\n\nThis is not for people who want guaranteed income.\n\nThis is not mainly for job seekers trying to fix their own resume.'},
  {label:'CTA Button', body:'Get the guide — $20'},
  {label:'Reassurance Line', body:'One-time $20. Yours to keep. Start with the simple version.'},
  {label:'Optional Discount Block', body:'Want the free starter checklist first?\n\nComment RESUME on TikTok and I\'ll send it to you.'}
];

const CALENDAR_DATA = [
  {day:'Monday',    am:'Opportunity / Mechanism',   pm:'Skeptic-Addressing'},
  {day:'Tuesday',   am:'Beginner-Objection',         pm:'Behind-the-Process'},
  {day:'Wednesday', am:'Before / After Value',       pm:'Engagement Question'},
  {day:'Thursday',  am:'Tool Stack',                 pm:'Myth-Bust'},
  {day:'Friday',    am:'Honest-Limits',              pm:'Simplicity'},
  {day:'Saturday',  am:'Curiosity / Contrarian',     pm:'Checklist-Driver'},
  {day:'Sunday',    am:'Start-This-Week',            pm:'Discovery-Framing'}
];

const ANGLES = [
  'Opportunity / Mechanism','Skeptic-Addressing','Beginner-Objection',
  'Behind-the-Process','Before / After Value','Engagement Question',
  'Tool Stack','Myth-Bust','Honest-Limits','Discovery-Framing'
];

// ═══════════════════════════════════════════════════════════════════════════════
// POST TEMPLATES  (3 variations per angle)
// ═══════════════════════════════════════════════════════════════════════════════

const POST_TEMPLATES = {
  opportunity:[
    {
      slide1:'Most people don\'t realize there\'s a simple service built around cleaning up resumes.',
      slide2:'It\'s called a resume cleanup service. People pay to have their resumes improved before they apply for jobs.',
      slide3:'You don\'t write resumes from scratch. You take what they have and make it better using AI.',
      slide4:'AI can spot vague bullet points and suggest specific, measurable replacements in seconds.',
      slide5:'Want to see how it works? Comment RESUME.',
      caption:'A simple service. Real demand. AI makes it beginner-friendly.',
      hashtags:'#resumetips #sidehustle #aitools #makemoney #beginnerbusiness',
      canva:'Dark blurred background. Slide 1 text in upper third, bold white. Slide 2 uses a clear statement in a rounded card. Keep each slide one idea only.',
      dm:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
    },
    {
      slide1:'There\'s a simple service people already understand and already pay for.',
      slide2:'Resume cleanup. People pay to have their resumes fixed before job applications. AI makes it easier to deliver.',
      slide3:'You don\'t need to be a career expert. You need a process and a few AI tools.',
      slide4:'The biggest improvement is usually bullet points. AI makes them specific in about 30 seconds.',
      slide5:'Comment RESUME and I\'ll send the free starter checklist.',
      caption:'Simple service. Existing demand. No complicated setup.',
      hashtags:'#resumecleanup #aisidehustle #extraincome #beginnerbusiness #makemoneyonline',
      canva:'Use a dark gradient background. White bold text on each slide. Semi-transparent rounded card on Slide 2 to highlight the mechanism clearly.',
      dm:'Fair question. I would be skeptical too.\n\nIt is not a get-rich thing. People genuinely pay to have their resumes cleaned up, and AI makes the service easier to deliver.\n\nStart with the free checklist and judge it for yourself.'
    },
    {
      slide1:'AI made one simple service a lot easier to offer than it used to be.',
      slide2:'A resume cleanup service. You help people fix their resumes using AI tools. That\'s the whole thing.',
      slide3:'You\'re not a professional resume writer. You\'re someone who learned a reliable cleanup process.',
      slide4:'Most resumes have the same problems: vague bullets, weak keywords, messy formatting. AI addresses all three.',
      slide5:'Comment RESUME and I\'ll send the cleanup checklist.',
      caption:'Not complicated. Not hyped up. Just a real service people pay for.',
      hashtags:'#resumehelp #aibusiness #sidehustleideas #beginnermoney #contentcreator',
      canva:'Dark blurred background. Each slide contains one idea. Slide 5 makes "Comment RESUME" visually clear with large text.',
      dm:'No, that is the point.\n\nYou are not becoming a professional resume writer.\n\nYou are learning a simple resume cleanup process using AI tools.\n\nThe checklist shows the basic steps.'
    }
  ],
  skeptic:[
    {
      slide1:'I\'d be skeptical of this too if I saw it on TikTok.',
      slide2:'It\'s a resume cleanup service. Not a passive income scheme. People pay for a service that improves their resume.',
      slide3:'You\'re not selling a dream. You\'re offering something people already search for and buy.',
      slide4:'The AI makes the service faster to deliver. That\'s the whole advantage — not magic, just efficiency.',
      slide5:'Start with the free checklist. Comment RESUME.',
      caption:'No hype. No guarantees. Just a simple service with real demand.',
      hashtags:'#nofluff #resumeservice #realsidehustle #aitools #beginnerbusiness',
      canva:'Dark background. Minimal design. Slide 1 should feel direct and honest, not salesy. No exclamation marks in design text.',
      dm:'Fair question. I would be skeptical too.\n\nIt is not a get-rich thing. People genuinely pay to have their resumes cleaned up, and AI makes the service easier to deliver.\n\nStart with the free checklist and judge it for yourself.'
    },
    {
      slide1:'This isn\'t a passive income thing. I want to be upfront about that.',
      slide2:'It\'s a service. You clean up resumes using AI. People pay for that service. That\'s the model.',
      slide3:'No guarantees. No secret system. Just a process you can learn and offer.',
      slide4:'The tool stack is Grok, ChatGPT, and Claude. Each one handles a specific part of the cleanup.',
      slide5:'Comment RESUME if you want to understand the process first.',
      caption:'Active income. Real service. Honest process.',
      hashtags:'#honestsidehustle #resumecleanup #aiassisted #extraincome #noguruneeded',
      canva:'Very clean design. One line per slide. Slide 2 should feel like a clear, calm statement of fact — not a pitch.',
      dm:'I do not want to throw a random number at you because it depends on how many people you help and how consistent you are.\n\nWhat I can show you is the process.\n\nStart with the free checklist first and see if it feels like something you would actually do.'
    },
    {
      slide1:'You\'ve probably seen too many online business ideas that turned out to be hype.',
      slide2:'A resume cleanup service is different. It\'s a real service with real demand. AI makes it beginner-accessible.',
      slide3:'People apply for jobs every day. A meaningful portion of them want help improving their resume first.',
      slide4:'AI makes the cleanup faster. That\'s the only "secret." No automation. No passive loop.',
      slide5:'Judge it yourself. Comment RESUME and I\'ll send the starter checklist.',
      caption:'Skeptics welcome. The checklist speaks for itself.',
      hashtags:'#skepticproof #resumeservice #sidehustlereal #aitools #beginnermoney',
      canva:'Dark moody background. Slide 1 tone should feel empathetic, not defensive. Slide 5 CTA in large, clear text.',
      dm:'Fair question. I would be skeptical too.\n\nIt is not a get-rich thing. People genuinely pay to have their resumes cleaned up, and AI makes the service easier to deliver.\n\nStart with the free checklist and judge it for yourself.'
    }
  ],
  beginner:[
    {
      slide1:'You don\'t need to be a career coach to offer a resume cleanup service.',
      slide2:'It\'s a resume cleanup service. Your job is improving what\'s already there — not advising careers.',
      slide3:'The client brings the resume. You clean it up using a simple AI workflow. That\'s the transaction.',
      slide4:'Start with bullet points. Most resumes have vague bullets that AI can sharpen in under a minute.',
      slide5:'Comment RESUME and I\'ll send the checklist.',
      caption:'Not a credential. A process. Beginners can start here.',
      hashtags:'#beginnersidehustle #resumecleanup #aitools #noexperienceneeded #extraincome',
      canva:'Clean, simple design. Slide 3 should feel reassuring, not overselling. Calm white text on dark background.',
      dm:'No, that is the point.\n\nYou are not becoming a professional resume writer.\n\nYou are learning a simple resume cleanup process using AI tools.\n\nThe checklist shows the basic steps.'
    },
    {
      slide1:'Not a writer. Not a career expert. Can you still offer this service?',
      slide2:'Yes. A resume cleanup service is a process, not a credential. You learn the steps and follow them.',
      slide3:'You learn three AI tools and a repeatable workflow. The client\'s resume tells you what needs fixing.',
      slide4:'The most common fixes: vague bullets, missing keywords, inconsistent formatting. AI handles all three.',
      slide5:'Want the beginner checklist? Comment RESUME.',
      caption:'No degree. No certification. Just a repeatable cleanup process.',
      hashtags:'#noexperience #beginnersidehustle #resumeservice #aiassisted #makemoney',
      canva:'Slide 1 should feel like a direct question. Slide 2 answers it clearly. Bold white text, no clutter.',
      dm:'No, that is the point.\n\nYou are not becoming a professional resume writer.\n\nYou are learning a simple resume cleanup process using AI tools.\n\nThe checklist shows the basic steps.'
    },
    {
      slide1:'Most digital service ideas are too complicated for beginners. This one is different.',
      slide2:'A resume cleanup service has one clear job: make someone\'s resume better using AI. That\'s it.',
      slide3:'You don\'t need a website, a large following, or a big budget to start learning this.',
      slide4:'A consistent delivery format and a working cleanup process are enough to start small.',
      slide5:'Comment RESUME and I\'ll send the first steps.',
      caption:'Simple to explain. Simple to deliver. Beginner-appropriate.',
      hashtags:'#simplesidehustle #resumecleanup #beginnerbusiness #extraincome #aitools',
      canva:'Minimal design. Each slide should be readable in under 2 seconds. Slide 5 CTA front and center.',
      dm:'Start with the free checklist first.\n\nYou do not need to buy anything just to understand the idea.\n\nIf it makes sense later, the full guide is there.'
    }
  ],
  process:[
    {
      slide1:'Here\'s what the resume cleanup process actually looks like step by step.',
      slide2:'Three AI tools: Grok for job-market keywords, ChatGPT for bullet structure, Claude for natural polish.',
      slide3:'You run the client\'s resume through each stage in order. Each step improves a different layer.',
      slide4:'The final output has cleaner wording, stronger bullets, and better-matched keywords — all from their existing resume.',
      slide5:'Comment RESUME and I\'ll send the starter checklist.',
      caption:'Grok → ChatGPT → Claude. That\'s the sequence.',
      hashtags:'#aiworkflow #resumecleanup #toolstack #sidehustleprocess #grokchatgptclaude',
      canva:'Slide 2 can show the 3-tool sequence visually. Use arrows or numbered list. Dark background, clean layout.',
      dm:'The method uses Grok, ChatGPT, and Claude.\n\nGrok helps with job-market keywords.\n\nChatGPT helps with structure and bullet cleanup.\n\nClaude helps make the wording sound more natural.'
    },
    {
      slide1:'The resume cleanup process is simpler to understand than most people expect.',
      slide2:'You fix bullets, improve wording, add better keywords, and clean up formatting. AI assists at each step.',
      slide3:'Step one is identifying the weakest parts. Most resumes fail in the same few areas.',
      slide4:'Vague bullets like "assisted with projects" become specific and measurable with the right AI prompt.',
      slide5:'Want to see the checklist? Comment RESUME.',
      caption:'Same problems. Same fixes. Repeatable process.',
      hashtags:'#resumeprocess #aicleanup #sidehustlesteps #makemoney #beginnersidehustle',
      canva:'Slide 4 could show a before/after bullet example. White text on dark card. Keep it punchy.',
      dm:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
    },
    {
      slide1:'What does "AI-assisted resume cleanup" actually mean in practice?',
      slide2:'It means using AI to improve wording, fix weak bullets, add better keywords, and tighten formatting.',
      slide3:'You\'re not rewriting the resume from scratch. You\'re improving what the client already has.',
      slide4:'The AI prompt does the heavy lifting. You review, refine, and deliver the cleaned version.',
      slide5:'Comment RESUME and I\'ll send the simple version.',
      caption:'AI does the drafting. You do the reviewing. Client gets a better resume.',
      hashtags:'#airesume #resumeservice #sidehustle #artificialintelligence #extraincome',
      canva:'Slides should feel informational, not sales-y. Dark background, clean sans-serif, one idea per card.',
      dm:'The method uses Grok, ChatGPT, and Claude.\n\nGrok helps with job-market keywords.\n\nChatGPT helps with structure and bullet cleanup.\n\nClaude helps make the wording sound more natural.'
    }
  ],
  'before-after':[
    {
      slide1:'Before: "Helped customers with their needs." After: "Resolved 40+ daily customer issues, 94% satisfaction rate."',
      slide2:'That\'s the kind of change a resume cleanup service delivers. One bullet. Completely different impression.',
      slide3:'AI spots vague language fast and suggests specific, measurable replacements. The client just approves.',
      slide4:'One stronger bullet can change how a hiring manager reads the entire resume in a 6-second scan.',
      slide5:'Comment RESUME for the starter checklist.',
      caption:'Vague → specific. Weak → strong. Same experience, better words.',
      hashtags:'#resumetips #beforeafter #resumecleanup #aitools #sidehustle',
      canva:'Slide 1 is a strong before/after contrast. Use two lines with different text weights. Visual punch is key.',
      dm:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
    },
    {
      slide1:'Most resumes get ignored because of one fixable problem.',
      slide2:'Vague bullet points. AI can identify every weak line and suggest a specific replacement in seconds.',
      slide3:'That\'s the core of a resume cleanup service — finding and fixing the vague spots.',
      slide4:'Keywords matter too. Many resumes are missing the exact terms ATS systems scan for.',
      slide5:'Comment RESUME and I\'ll send the checklist.',
      caption:'Vague bullets cost people interviews. AI fixes them fast.',
      hashtags:'#atsfriendly #resumefix #jobsearch #airesume #sidehustleidea',
      canva:'Slide 1 should feel like a revelation. Bold hook text. Slide 4 can mention ATS — adds credibility.',
      dm:'Fair question. I would be skeptical too.\n\nIt is not a get-rich thing. People genuinely pay to have their resumes cleaned up, and AI makes the service easier to deliver.\n\nStart with the free checklist and judge it for yourself.'
    },
    {
      slide1:'A resume that reads like a job description is a resume that gets filtered out.',
      slide2:'A resume cleanup service replaces generic language with specific, accomplishment-based bullets using AI.',
      slide3:'You don\'t need to know the client\'s industry deeply. The AI prompt pulls the right language from their existing draft.',
      slide4:'Formatting is part of it too. Cluttered layouts slow down readers who are scanning in under ten seconds.',
      slide5:'Want the process broken down? Comment RESUME.',
      caption:'Generic resumes get filtered. Specific ones get calls.',
      hashtags:'#resumewriting #aitools #sidehustle #resumeservice #makemoney',
      canva:'Slide 1 is punchy and slightly bold in contrast. Keep each slide clean and minimal. Avoid decorative clutter.',
      dm:'No, that is the point.\n\nYou are not becoming a professional resume writer.\n\nYou are learning a simple resume cleanup process using AI tools.\n\nThe checklist shows the basic steps.'
    }
  ],
  engagement:[
    {
      slide1:'Would you pay someone to clean up your resume before a big job application?',
      slide2:'A lot of people would. That\'s the demand behind a resume cleanup service — and why it\'s a viable beginner business.',
      slide3:'AI makes it easier to deliver well. That\'s why this is beginner-accessible even without a writing background.',
      slide4:'You don\'t need to be a writer. You need a repeatable process and three AI tools.',
      slide5:'Comment yes or no. And comment RESUME if you want the checklist.',
      caption:'Real question. Real service. Drop your answer below.',
      hashtags:'#wouldyoupay #resumeservice #sidehustle #aitools #engagement',
      canva:'Slide 1 is a direct question — big text, curiosity-building. Slide 5 has two clear prompts: yes/no + RESUME.',
      dm:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
    },
    {
      slide1:'What would you charge to clean up someone\'s resume using AI?',
      slide2:'Resume cleanup is a real paid service. That\'s the foundation of the Resume Money Method.',
      slide3:'The process uses Grok, ChatGPT, and Claude to cover keywords, structure, and final polish.',
      slide4:'Pricing comes after you understand the process. Start there before setting a number.',
      slide5:'Comment RESUME and I\'ll send the starter checklist.',
      caption:'Pricing question that opens the conversation. What would you charge?',
      hashtags:'#pricing #resumeservice #sidehustle #aitools #makemoney',
      canva:'Slide 1 poses an open question. Keep it conversational. Slide 5 is a clear exchange offer.',
      dm:'I do not want to throw a random number at you because it depends on how many people you help and how consistent you are.\n\nWhat I can show you is the process.\n\nStart with the free checklist first and see if it feels like something you would actually do.'
    },
    {
      slide1:'Have you ever looked at a job posting and thought your resume wasn\'t ready?',
      slide2:'A lot of people feel that. That\'s who pays for a resume cleanup service — people who know their resume needs work.',
      slide3:'The service bridges the gap between the resume they have and the one the job posting demands.',
      slide4:'AI makes that gap analysis fast. And the cleanup even faster.',
      slide5:'Save this if it makes sense. Comment RESUME for the checklist.',
      caption:'If you\'ve felt your resume wasn\'t ready, someone\'s paid for help with that.',
      hashtags:'#jobsearch #resumehelp #sidehustle #aitools #resumeservice',
      canva:'Slide 1 is empathy-based — feel personal, not pitchy. Slide 5 offers two options: save or comment.',
      dm:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
    }
  ],
  'tool-stack':[
    {
      slide1:'Three AI tools. One resume cleanup process.',
      slide2:'Grok handles job-market keywords. ChatGPT handles structure. Claude handles natural, polished language.',
      slide3:'Each tool does a specific job. You don\'t need to be an expert at any of them to get started.',
      slide4:'The prompts do most of the work. You review the output and deliver the cleaned-up resume.',
      slide5:'Comment RESUME and I\'ll send the checklist that breaks this down.',
      caption:'Grok → ChatGPT → Claude. Three tools. One clean result.',
      hashtags:'#grok #chatgpt #claude #aitools #resumeservice #toolstack',
      canva:'Slide 2 can show the 3-tool flow visually. Use arrow icons or numbered sequence. Clean dark background.',
      dm:'The method uses Grok, ChatGPT, and Claude.\n\nGrok helps with job-market keywords.\n\nChatGPT helps with structure and bullet cleanup.\n\nClaude helps make the wording sound more natural.'
    },
    {
      slide1:'The AI tool stack for a resume cleanup service isn\'t complicated.',
      slide2:'Grok → ChatGPT → Claude. Keywords first, then structure, then natural-sounding wording.',
      slide3:'You don\'t need all three to start. Most beginners begin with just ChatGPT for the first few cleanups.',
      slide4:'The goal is a resume that reads better, scans better for ATS, and sounds more human than generic.',
      slide5:'Comment RESUME for the starter version.',
      caption:'Simple stack. Clear sequence. Start with one tool if needed.',
      hashtags:'#aibusiness #toolstack #resumecleanup #sidehustle #beginnertools',
      canva:'Simple infographic style on Slide 2. Arrows between tool names. Minimal text on each slide.',
      dm:'The method uses Grok, ChatGPT, and Claude.\n\nGrok helps with job-market keywords.\n\nChatGPT helps with structure and bullet cleanup.\n\nClaude helps make the wording sound more natural.'
    },
    {
      slide1:'Why does the resume cleanup process use three AI tools instead of one?',
      slide2:'Each tool has a different strength. Grok for research, ChatGPT for structure, Claude for natural language.',
      slide3:'You run the resume through each stage in order. The output improves at each step.',
      slide4:'Most resumes improve significantly just from the keyword and bullet cleanup phases alone.',
      slide5:'Want the full breakdown? Comment RESUME.',
      caption:'Three strengths. One clean resume. That\'s the sequence.',
      hashtags:'#aiworkflow #chatgpt #grok #claude #resumeservice #sidehustletips',
      canva:'Slide 1 poses a question. Slide 2 answers it clearly with the three tools. Keep design clean and focused.',
      dm:'The method uses Grok, ChatGPT, and Claude.\n\nGrok helps with job-market keywords.\n\nChatGPT helps with structure and bullet cleanup.\n\nClaude helps make the wording sound more natural.'
    }
  ],
  'myth-bust':[
    {
      slide1:'You don\'t need to be a professional resume writer to offer resume cleanup.',
      slide2:'Resume cleanup is about improving what\'s already there — not writing a resume from a blank page.',
      slide3:'That distinction makes it simpler to learn and more consistent to deliver.',
      slide4:'The AI handles the heavy wording work. You handle the process, the quality check, and the delivery.',
      slide5:'Comment RESUME if you want to see how it works.',
      caption:'Not professional writing. A cleanup process. That\'s the difference.',
      hashtags:'#mythbust #resumecleanup #notaresumewriter #sidehustle #aitools',
      canva:'Slide 1 should feel like a clear correction. Bold statement. Slide 3 reinforces the simplicity of the distinction.',
      dm:'No, that is the point.\n\nYou are not becoming a professional resume writer.\n\nYou are learning a simple resume cleanup process using AI tools.\n\nThe checklist shows the basic steps.'
    },
    {
      slide1:'Resume cleanup is not the same as professional resume writing. Worth understanding the difference.',
      slide2:'You\'re not replacing a career expert. You\'re offering a simpler, AI-assisted improvement service.',
      slide3:'Clients bring their resume. You improve the wording, bullets, and keywords using AI tools.',
      slide4:'Most people who need this aren\'t looking for a career overhaul. They want a cleaner, stronger resume.',
      slide5:'Comment RESUME and I\'ll send the checklist.',
      caption:'Different service. Simpler offer. Real demand.',
      hashtags:'#resumeservice #notresumewriting #aitools #sidehustle #beginnerservice',
      canva:'Slide 1 sets up the myth. Slide 2 corrects it clearly. Calm, direct tone — not defensive.',
      dm:'Fair question. I would be skeptical too.\n\nIt is not a get-rich thing. People genuinely pay to have their resumes cleaned up, and AI makes the service easier to deliver.\n\nStart with the free checklist and judge it for yourself.'
    },
    {
      slide1:'AI side hustles are not all complicated. Some are built around simple services.',
      slide2:'A resume cleanup service is one. Not a SaaS tool. Not a content strategy. A service. That\'s it.',
      slide3:'People already understand services. They\'re easier to sell than courses, memberships, or subscriptions.',
      slide4:'AI makes the service faster to deliver. That\'s the whole structural advantage.',
      slide5:'Want the simple breakdown? Comment RESUME.',
      caption:'Services are simpler to sell. AI makes them faster to deliver.',
      hashtags:'#aiservice #simplesidehustle #resumecleanup #nocomplication #makemoney',
      canva:'Contrast the complexity of typical AI side hustles with the simplicity of this one. Clean, minimal design.',
      dm:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
    }
  ],
  honest:[
    {
      slide1:'This isn\'t for everyone and I\'m not going to pretend it is.',
      slide2:'A resume cleanup service requires consistency. You have to actually deliver work to actual clients.',
      slide3:'It\'s beginner-friendly, but it\'s not instant. You need to learn the process before you can offer it.',
      slide4:'The checklist gives you the framework. The full guide has the complete method for getting started.',
      slide5:'If that sounds fair, comment RESUME.',
      caption:'No guarantees. No instant results. Just a real process for real people.',
      hashtags:'#honestsidehustle #noguarantees #resumeservice #realwork #extraincome',
      canva:'Tone: direct and honest. No flashy design choices. Clean dark background, plain bold text.',
      dm:'I do not want to throw a random number at you because it depends on how many people you help and how consistent you are.\n\nWhat I can show you is the process.\n\nStart with the free checklist first and see if it feels like something you would actually do.'
    },
    {
      slide1:'No income guarantees here. I\'m not going to give you a number.',
      slide2:'A resume cleanup service is a real service — what you earn depends entirely on how many cleanups you do.',
      slide3:'What I can give you is the process. The output depends on what you put in.',
      slide4:'The AI tools cut the time you spend on each resume. That\'s where the efficiency comes from.',
      slide5:'Want the honest breakdown? Comment RESUME.',
      caption:'Income depends on output. Process is what I can give you.',
      hashtags:'#noincomeguarantee #honestbusiness #resumeservice #sidehustle #realprocess',
      canva:'Minimalist design. Calm tone in every slide. No hype words in the visual text.',
      dm:'I do not want to throw a random number at you because it depends on how many people you help and how consistent you are.\n\nWhat I can show you is the process.\n\nStart with the free checklist first and see if it feels like something you would actually do.'
    },
    {
      slide1:'This is not a passive income idea. Let me be clear about that upfront.',
      slide2:'A resume cleanup service is active work. You help someone, they pay. That\'s the model.',
      slide3:'The advantage is it\'s simple enough to explain and simple enough to start without a complicated setup.',
      slide4:'AI cuts the delivery time per resume. That\'s where the practical value of the tools comes in.',
      slide5:'Comment RESUME if the honest version still sounds worth exploring.',
      caption:'Active income. Honest model. Simple service.',
      hashtags:'#nopassiveincome #activesidehustle #resumeservice #honestmoney #aitools',
      canva:'Plain, honest-feeling design. Slide 1 is a direct clarification. No decorative elements that feel hype-adjacent.',
      dm:'No pressure. Try the checklist first.\n\nIf you get stuck or have questions, message me.'
    }
  ],
  discovery:[
    {
      slide1:'I wasn\'t looking for a side hustle when I came across this idea.',
      slide2:'It\'s a resume cleanup service. AI makes it easier to deliver well. That\'s the whole discovery.',
      slide3:'The simpler an idea is to explain, the easier it is to sell. This one is easy to explain.',
      slide4:'People already know what a resume is and they already know it matters. You\'re just offering help improving it.',
      slide5:'Comment RESUME and I\'ll send the checklist.',
      caption:'Discovered, not invented. Simple to explain. Real demand.',
      hashtags:'#discovered #resumeservice #aitools #sidehustleidea #simpleidea',
      canva:'Conversational tone. Slide 1 feels personal. Keep visuals minimal and narrative-forward.',
      dm:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
    },
    {
      slide1:'Most money methods feel invented. This one just already exists.',
      slide2:'People have always paid for resume help. AI makes the service faster and more beginner-accessible than before.',
      slide3:'You\'re entering a market with existing demand. You\'re not creating awareness — you\'re meeting it.',
      slide4:'The three-tool stack — Grok, ChatGPT, Claude — is what makes it practical to offer at this scale.',
      slide5:'Comment RESUME for the starter checklist.',
      caption:'Existing market. Better tools. Beginner entry point.',
      hashtags:'#existingmarket #resumeservice #aitools #sidehustle #simpleidea',
      canva:'Slide 1 creates contrast between invented vs. discovered. Bold white text on dark background.',
      dm:'Fair question. I would be skeptical too.\n\nIt is not a get-rich thing. People genuinely pay to have their resumes cleaned up, and AI makes the service easier to deliver.\n\nStart with the free checklist and judge it for yourself.'
    },
    {
      slide1:'The best extra income ideas solve a problem people already pay someone to solve.',
      slide2:'Resume cleanup is one of those. AI makes it practical to offer without a professional background.',
      slide3:'You\'re not creating demand. You\'re entering a market that already pays for this kind of help.',
      slide4:'Your job is to learn the cleanup process and deliver it consistently. The market already exists.',
      slide5:'Want to see the process? Comment RESUME.',
      caption:'Pre-existing demand. AI-powered delivery. Beginner can start here.',
      hashtags:'#existingdemand #resumecleanup #aiservice #sidehustle #makemoney',
      canva:'Calm, confident design. Slide 1 sets up the logic. Each slide builds on the previous. Minimal clutter.',
      dm:'Sent. Here\'s the free Resume Cleanup Starter Checklist. It walks you through the basic process. Take a look and tell me if it makes sense for you.\n\n[link]'
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════
// AGENT DEFINITIONS + ENGINES
// ═══════════════════════════════════════════════════════════════════════════════

const AGENTS = [
  {
    id:'hook',
    icon:'🎣',
    name:'Hook Agent',
    purpose:'Generate strong TikTok Slide 1 hook ideas for any RMM angle or topic.',
    placeholder:'Enter a topic, angle, or keyword (e.g. "beginner skeptic" or "tool stack")',
    run: hookAgent
  },
  {
    id:'slide',
    icon:'📋',
    name:'Slide Agent',
    purpose:'Turn a hook or angle into a complete 5-slide RMM TikTok slideshow.',
    placeholder:'Paste a hook or describe the angle (e.g. "before/after bullet point value")',
    run: slideAgent
  },
  {
    id:'slide2fixer',
    icon:'🔍',
    name:'Slide 2 Fixer',
    purpose:'Check whether your Slide 2 clearly rewards the curiosity from Slide 1.',
    placeholder:'Paste your current Slide 2 text here',
    run: slide2FixerAgent
  },
  {
    id:'caption',
    icon:'✍️',
    name:'Caption Agent',
    purpose:'Write a caption and hashtag set for any RMM post topic.',
    placeholder:'Describe the post topic (e.g. "AI tool stack breakdown")',
    run: captionAgent
  },
  {
    id:'dm',
    icon:'📩',
    name:'DM Agent',
    purpose:'Write the right reply for someone who DMs after commenting RESUME.',
    placeholder:'What did they ask or say? (e.g. "is this real?" or "how much can I make?")',
    run: dmAgent
  },
  {
    id:'canva',
    icon:'🎨',
    name:'Canva Brief Agent',
    purpose:'Turn a 5-slide post into clear Canva design notes.',
    placeholder:'Paste your 5 slides here, one per line',
    run: canvaAgent
  },
  {
    id:'calendar',
    icon:'📅',
    name:'Weekly Calendar Agent',
    purpose:'Generate a full 14-post weekly plan with angles and times.',
    placeholder:'Optional: paste a week number or theme focus (or leave blank)',
    run: calendarAgent
  },
  {
    id:'analytics',
    icon:'📊',
    name:'Analytics Agent',
    purpose:'Review post metrics and suggest what to test or fix next.',
    placeholder:'Paste your metrics (e.g. "views: 4200, slide2 dropoff: 72%, RESUME comments: 3")',
    run: analyticsAgent
  }
];

// ── Agent logic ────────────────────────────────────────────────────────────────

function hookAgent(input) {
  const i = input.toLowerCase();
  const hooks = [
    'Most people looking for a side hustle overlook the simplest one.',
    'A resume cleanup service is easier to explain than most online businesses.',
    'There\'s a service people already understand and already pay for.',
    'If you want extra income, start with a service people have already bought.',
    'AI made one type of service a lot more beginner-accessible.',
    'Most AI side hustles are too complicated. This one isn\'t.',
    'People overthink starting a service business. Here\'s a simple one.',
    'A simple service with existing demand is better than a complicated one with none.',
    'The easiest service to sell is one people already know they need.',
    'You don\'t need a course, a brand, or a big audience for this.',
  ];
  const focused = [];
  if (i.includes('skeptic') || i.includes('hype')) {
    focused.push('I\'d be skeptical of this too if I saw it on TikTok.',
      'This isn\'t a passive income play. I want to be upfront about that.',
      'You\'ve probably seen too many online business ideas that were hype. This isn\'t that.');
  }
  if (i.includes('beginner') || i.includes('start') || i.includes('experience')) {
    focused.push('You don\'t need to be a career coach to offer this.',
      'Not a writer. Not an expert. Can you still do this?',
      'Most digital service ideas are too complicated for beginners. This one is different.');
  }
  if (i.includes('tool') || i.includes('ai') || i.includes('grok') || i.includes('claude')) {
    focused.push('Three AI tools. One resume cleanup process.',
      'The tool stack for this service isn\'t complicated.',
      'Why does this use three AI tools instead of one?');
  }
  if (i.includes('before') || i.includes('after') || i.includes('bullet')) {
    focused.push('Before: "Helped customers with their needs." After: "Resolved 40+ daily customer issues."',
      'Most resumes get filtered because of one fixable problem.',
      'A resume that reads like a job description gets filtered out.');
  }
  const pool = focused.length >= 3 ? focused : [...focused, ...hooks];
  const out = pool.slice(0, 5).map((h, i) => `Hook ${i+1}: ${h}`).join('\n\n');
  return `5 RMM Hook Options for "${input.trim() || 'general angle'}":\n\n${out}\n\n───\nRule: Slide 1 creates curiosity. Slide 2 rewards it immediately. The offer must be clear by Slide 2.`;
}

function slideAgent(input) {
  const i = input.toLowerCase();
  let angle = 'opportunity';
  if (i.includes('skeptic') || i.includes('real')) angle = 'skeptic';
  else if (i.includes('beginner') || i.includes('start') || i.includes('experience')) angle = 'beginner';
  else if (i.includes('tool') || i.includes('grok') || i.includes('stack')) angle = 'tool-stack';
  else if (i.includes('before') || i.includes('after') || i.includes('bullet')) angle = 'before-after';
  else if (i.includes('process') || i.includes('how')) angle = 'process';
  else if (i.includes('honest') || i.includes('guarantee') || i.includes('passive')) angle = 'honest';
  else if (i.includes('discover') || i.includes('found')) angle = 'discovery';
  else if (i.includes('myth') || i.includes('wrong') || i.includes('writer')) angle = 'myth-bust';
  else if (i.includes('would you') || i.includes('question') || i.includes('engage')) angle = 'engagement';

  const templates = POST_TEMPLATES[angle];
  const t = templates[Math.floor(Math.random() * templates.length)];
  return `Generated post — angle: ${angle.toUpperCase()}\n\nSlide 1 (Hook): ${t.slide1}\n\nSlide 2 (Reward ★): ${t.slide2}\n\nSlide 3 (Simplicity): ${t.slide3}\n\nSlide 4 (Value): ${t.slide4}\n\nSlide 5 (CTA): ${t.slide5}\n\nCaption: ${t.caption}\n\nHashtags: ${t.hashtags}\n\nCanva: ${t.canva}\n\nDM Reply: ${t.dm}`;
}

function slide2FixerAgent(input) {
  const vagueTerms = ['here\'s why','let me explain','most people miss','it\'s simpler than','you\'ll see',
    'stay tuned','trust me','keep watching','wait for it','this is important'];
  const lower = input.toLowerCase();
  const isVague = vagueTerms.some(t => lower.includes(t)) ||
    input.trim().split(' ').length < 6 ||
    !lower.includes('resume') && !lower.includes('service') && !lower.includes('cleanup') && !lower.includes('ai') && !lower.includes('people pay');

  if (isVague) {
    return `⚠️ SLIDE 2 PROBLEM DETECTED\n\nYour Slide 2: "${input.trim()}"\n\nIssue: This slide is too vague. It does not clearly explain the mechanism or offer.\n\nSlide 2 must immediately reward the curiosity from Slide 1.\n\nTry one of these stronger versions:\n\n✓ "It's a resume cleanup service. People pay to have their resumes improved before they apply."\n\n✓ "You offer a resume cleanup service using AI. You improve wording, bullets, and keywords."\n\n✓ "People pay for resume cleanup. AI makes it easier to deliver. That's the method."\n\n✓ "Resume cleanup. AI handles the heavy lifting. You deliver the improved version."\n\nRule: The offer must be clear by Slide 2. No mystery. No build-up.`;
  }
  return `✓ SLIDE 2 LOOKS CLEAR\n\nYour Slide 2: "${input.trim()}"\n\nThis slide appears to explain the mechanism or offer clearly. Good.\n\nQuick checklist:\n• Does it name the service? ✓\n• Does it explain what the viewer is looking at? ✓\n• Could a first-time viewer understand the offer after reading this? Confirm ✓\n\nIf Slide 1-to-Slide-2 drop-off is still high (>60%), the problem is likely Slide 1 failing to create enough curiosity — not Slide 2.`;
}

function captionAgent(input) {
  const topic = input.trim() || 'resume cleanup service';
  const hashtags = '#resumecleanup #sidehustle #aitools #makemoney #beginnerbusiness #extraincome #resumetips #aibusiness';
  const captions = [
    `A simple service. Real demand. AI makes it beginner-accessible.\n\nComment RESUME for the free starter checklist.`,
    `Not passive income. Not a course. A real service with a real process.\n\nComment RESUME if you want the checklist.`,
    `People already pay for this. AI makes it easier to deliver.\n\nComment RESUME and I'll send the simple version.`,
    `Resume cleanup isn't complicated. The process is what matters.\n\nComment RESUME for the starter checklist.`,
    `Simple to explain. Simple to deliver. That's why it's beginner-friendly.\n\nComment RESUME and I'll send the checklist.`
  ];
  const cap = captions[Math.floor(Math.random() * captions.length)];
  return `Caption for: "${topic}"\n\n${cap}\n\nHashtags:\n${hashtags}\n\n───\nCaption rule: End with a clear exchange CTA. No vague engagement bait.`;
}

function dmAgent(input) {
  const i = input.toLowerCase();
  let reply = DM_REPLIES[0];
  if (i.includes('real') || i.includes('scam') || i.includes('legit') || i.includes('work')) {
    reply = DM_REPLIES[1];
  } else if (i.includes('how much') || i.includes('make') || i.includes('earn') || i.includes('income')) {
    reply = DM_REPLIES[2];
  } else if (i.includes('experience') || i.includes('qualify') || i.includes('background') || i.includes('know')) {
    reply = DM_REPLIES[3];
  } else if (i.includes('tool') || i.includes('software') || i.includes('use') || i.includes('grok') || i.includes('chatgpt')) {
    reply = DM_REPLIES[4];
  } else if (i.includes('guide') || i.includes('buy') || i.includes('full') || i.includes('course') || i.includes('price')) {
    reply = DM_REPLIES[5];
  } else if (i.includes('money') || i.includes('afford') || i.includes('broke') || i.includes('free')) {
    reply = DM_REPLIES[7];
  }
  return `Matched scenario: "${reply.trigger}"\n\n━━━\n${reply.reply}\n━━━\n\nTip: Always send the free checklist link first. Convert to guide sale in the follow-up, not the first DM.`;
}

function canvaAgent(input) {
  const lines = input.trim().split('\n').filter(l => l.trim());
  const slideCount = lines.length || 5;
  let notes = `Canva Design Brief\nFormat: 1080 × 1920 (vertical TikTok)\nSlides: ${Math.max(slideCount, 5)}\n\n`;
  notes += `Background: Dark blurred gradient — use a dark photo or gradient (deep navy, near-black)\nOverlay: Semi-transparent black layer over background for text contrast\nText: Bold white, large enough to read in 1–2 seconds per slide\nText boxes: Semi-transparent black rounded rectangle behind all text\n\n`;
  notes += `Per-slide notes:\n`;
  notes += `Slide 1: Largest text. Place in upper third so it survives TikTok feed cropping. Font size: 52–60pt\n`;
  notes += `Slide 2: Clear mechanism statement. Slightly smaller text. Highlight key words if needed. Font: 40–48pt\n`;
  notes += `Slide 3: Reassurance tone. Calm visual. Same layout, slightly warmer feel. Font: 38–44pt\n`;
  notes += `Slide 4: Value/detail. Can use a small before/after or numbered point. Font: 36–42pt\n`;
  notes += `Slide 5: "Comment RESUME" must be visually obvious. Bold. Centered. Use accent color or underline. Font: 44–52pt\n\n`;
  notes += `Brand aesthetic: Practical, mature, clean. NOT hype. NOT guru. NOT busy.\nAvoid: Red arrows, stock photo cheese, neon colors, crowded layouts, tiny text`;
  return notes;
}

function calendarAgent(input) {
  const week = input.trim() || 'Week 1';
  let out = `14-Post Weekly Plan — ${week}\nPost time: 9:00 AM and 4:00 PM daily\n\n`;
  CALENDAR_DATA.forEach((d, idx) => {
    const templates_am = POST_TEMPLATES[angleToKey(d.am)];
    const templates_pm = POST_TEMPLATES[angleToKey(d.pm)];
    const am_t = templates_am ? templates_am[idx % templates_am.length] : null;
    const pm_t = templates_pm ? templates_pm[idx % templates_pm.length] : null;
    out += `${d.day.toUpperCase()}\n`;
    out += `  9:00 AM — Angle: ${d.am}\n`;
    if (am_t) out += `  Hook: ${am_t.slide1}\n`;
    out += `  4:00 PM — Angle: ${d.pm}\n`;
    if (pm_t) out += `  Hook: ${pm_t.slide1}\n`;
    out += '\n';
  });
  out += `Rule: Do not repeat the same hook two days in a row.\nRule: Every post must make the offer clear by Slide 2.`;
  return out;
}

function analyticsAgent(input) {
  const lower = input.toLowerCase();
  const getNum = (keys) => {
    for (const k of keys) {
      const m = lower.match(new RegExp(k + '[:\\s]+([\\d.]+)'));
      if (m) return parseFloat(m[1]);
    }
    return null;
  };
  const views = getNum(['views','view']);
  const dropoff = getNum(['drop.off','dropoff','slide.?2','slide 2','s2']);
  const comments = getNum(['comments','comment']);
  const resumeC = getNum(['resume comments','resume comment','resume']);
  const dms = getNum(['dms','dm']);
  const sales = getNum(['sales','sale','guide']);

  let report = `Analytics Diagnosis\n━━━━━━━━━━━━━━━━━━\n`;

  if (dropoff !== null) {
    if (dropoff > 70) {
      report += `⚠️ Slide 1→2 Drop-off: ${dropoff}% — HIGH\nDiagnosis: Slide 2 is probably too vague or not rewarding the curiosity fast enough.\nFix: Make Slide 2 a clear mechanism statement. Example: "It's a resume cleanup service."\n\n`;
    } else if (dropoff > 50) {
      report += `🟡 Slide 1→2 Drop-off: ${dropoff}% — MODERATE\nDiagnosis: Getting closer. Slide 2 may still be unclear or taking too long to make the offer obvious.\nFix: Tighten Slide 2 to one clear sentence about what the viewer is looking at.\n\n`;
    } else {
      report += `✓ Slide 1→2 Drop-off: ${dropoff}% — GOOD\nSlide 2 is retaining viewers well. Keep this structure.\n\n`;
    }
  }
  if (views !== null && (comments === null || comments < views * 0.005)) {
    report += `⚠️ High views, low comments.\nDiagnosis: The hook attracts attention but the CTA isn't converting.\nFix: Make the CTA more exchange-based. "Comment RESUME and I'll send X" beats "like if you agree."\n\n`;
  }
  if (resumeC !== null && resumeC === 0 && views !== null && views > 500) {
    report += `⚠️ No RESUME comments despite views.\nDiagnosis: The checklist offer isn't landing as a valuable enough exchange.\nFix: Make the checklist sound more concrete on Slide 5. Example: "Comment RESUME and I'll send the 5-step cleanup checklist."\n\n`;
  }
  if (dms !== null && dms > 0 && (sales === null || sales === 0)) {
    report += `⚠️ DMs coming in but no guide sales.\nDiagnosis: The DM conversation or checklist isn't moving people toward the $20 guide.\nFix: Improve the follow-up DM sequence. Mention the guide after they've reviewed the checklist.\n\n`;
  }
  if (report === `Analytics Diagnosis\n━━━━━━━━━━━━━━━━━━\n`) {
    report += `No specific issues detected from the metrics provided.\n\nPaste metrics in this format for a detailed diagnosis:\nviews: 4200, slide2 dropoff: 72%, comments: 8, RESUME comments: 3, DMs: 2, sales: 0\n\nTarget benchmarks:\n• Slide 1→2 drop-off: aim for <50% (current common: ~70%)\n• RESUME comment rate: aim for >0.5% of views\n• DM to sale conversion: improve with better follow-up sequence`;
  }
  return report;
}

function angleToKey(angleName) {
  const map = {
    'Opportunity / Mechanism':'opportunity','Skeptic-Addressing':'skeptic',
    'Beginner-Objection':'beginner','Behind-the-Process':'process',
    'Before / After Value':'before-after','Engagement Question':'engagement',
    'Tool Stack':'tool-stack','Myth-Bust':'myth-bust',
    'Honest-Limits':'honest','Discovery-Framing':'discovery',
    'Simplicity':'honest','Curiosity / Contrarian':'discovery',
    'Checklist-Driver':'opportunity','Start-This-Week':'beginner'
  };
  return map[angleName] || 'opportunity';
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════════

function initNav() {
  const btns = document.querySelectorAll('.nav-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.section;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.getElementById(`section-${target}`).classList.add('active');
      closeSidebar();
    });
  });

  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  overlay.addEventListener('click', closeSidebar);

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    toggle.classList.remove('open');
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function renderHome() {
  const entries = getEntries();
  const totalViews = entries.reduce((s, e) => s + (Number(e.views) || 0), 0);
  const totalSales = entries.reduce((s, e) => s + (Number(e.sales) || 0), 0);
  const totalDMs = entries.reduce((s, e) => s + (Number(e.dms) || 0), 0);
  const totalPosts = Number(localStorage.getItem('rmm_generated_posts') || 0);

  document.getElementById('homeStats').innerHTML = `
    <div class="stat-card"><div class="stat-val">${totalPosts}</div><div class="stat-lbl">Posts Generated</div></div>
    <div class="stat-card"><div class="stat-val">${totalViews.toLocaleString()}</div><div class="stat-lbl">Views Tracked</div></div>
    <div class="stat-card"><div class="stat-val">${totalSales}</div><div class="stat-lbl">Guide Sales</div></div>
    <div class="stat-card"><div class="stat-val">${totalDMs}</div><div class="stat-lbl">DMs Tracked</div></div>
  `;

  document.getElementById('homeGrid').innerHTML = `
    <div class="info-card"><h3>The Offer</h3><p>A $20 digital guide teaching beginners how to make money offering AI-assisted resume cleanup services.</p></div>
    <div class="info-card"><h3>The Audience</h3><p>Practical, skeptical adults 25–54 who want extra income without a complicated online business.</p></div>
    <div class="info-card"><h3>The Tool Stack</h3><p>Grok → ChatGPT → Claude. Keywords first, then structure, then natural polish.</p></div>
    <div class="info-card glow"><h3>★ Slide 2 Rule</h3><p>Slide 1 creates curiosity. Slide 2 must reward it immediately. The offer must be clear by Slide 2. Never be vague on Slide 2.</p></div>
    <div class="info-card"><h3>The Funnel</h3><p>Comments → DMs → Free checklist downloads → $20 guide sales. Views matter but buyer intent matters more.</p></div>
    <div class="info-card"><h3>CTA Rule</h3><p>Primary CTA is always "Comment RESUME and I'll send the free starter checklist." Make it feel like a clear exchange.</p></div>
  `;
}

function renderAgents() {
  const grid = document.getElementById('agentGrid');
  grid.innerHTML = AGENTS.map(a => `
    <div class="agent-card">
      <div class="agent-header">
        <div class="agent-icon">${a.icon}</div>
        <div class="agent-name">${a.name}</div>
      </div>
      <div class="agent-purpose">${a.purpose}</div>
      <div class="agent-input-label">Input</div>
      <textarea class="agent-input" id="input-${a.id}" placeholder="${htmlEsc(a.placeholder)}"></textarea>
      <div class="agent-input-label">Output</div>
      <div class="agent-output" id="output-${a.id}">Output will appear here...</div>
      <div class="agent-actions">
        <button class="btn btn-primary btn-sm" onclick="runAgent('${a.id}')">Run Agent</button>
        <button class="btn btn-copy btn-sm" onclick="copyAgentOutput('${a.id}', this)">Copy Output</button>
      </div>
    </div>
  `).join('');
}

function renderCTABank() {
  const container = document.getElementById('ctaBankContent');
  const sections = [
    {title:'Primary CTA — Use most often', key:'primary', avoid:false},
    {title:'Checklist CTA — Use on educational posts', key:'checklist', avoid:false},
    {title:'Guide-Aware CTA — Use sparingly', key:'guideAware', avoid:false},
    {title:'Engagement CTA — Top-of-funnel', key:'engagement', avoid:false},
    {title:'❌ Avoid These CTAs', key:'avoid', avoid:true}
  ];
  container.innerHTML = sections.map(s => `
    <div class="cta-group">
      <div class="cta-group-title">${s.title}</div>
      ${CTA_BANK[s.key].map(cta => `
        <div class="cta-row">
          <div class="cta-text ${s.avoid ? 'avoid' : ''}">${escapeHTML(cta)}</div>
          ${!s.avoid ? `<button class="btn btn-copy btn-sm" data-copy-text="${htmlEsc(cta)}" onclick="copyTextFromBtn(this)">Copy</button>` : ''}
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderDMReplies() {
  const container = document.getElementById('dmRepliesContent');
  container.innerHTML = DM_REPLIES.map(r => `
    <div class="dm-card">
      <div class="dm-card-header">
        <div class="dm-trigger">${escapeHTML(r.trigger)}</div>
        <button class="btn btn-copy btn-sm" data-copy-text="${htmlEsc(r.reply)}" onclick="copyTextFromBtn(this)">Copy</button>
      </div>
      <div class="dm-card-body">${escapeHTML(r.reply)}</div>
    </div>
  `).join('');
}

function renderCalendar() {
  const container = document.getElementById('calendarContent');
  const rows = CALENDAR_DATA.map(d => `
    <tr>
      <td class="day-name">${d.day}</td>
      <td><span class="angle-pill">9 AM — ${d.am}</span></td>
      <td><span class="angle-pill pm">4 PM — ${d.pm}</span></td>
    </tr>
  `).join('');
  container.innerHTML = `
    <table class="cal-table">
      <thead><tr><th>Day</th><th>9:00 AM Post</th><th>4:00 PM Post</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="angles-section">
      <h3>10 Rotating Angles</h3>
      <div class="angle-chips">
        ${ANGLES.map(a => `<div class="angle-chip">${a}</div>`).join('')}
      </div>
    </div>
  `;
}

function renderContentRules() {
  const container = document.getElementById('contentRulesContent');
  container.innerHTML = `
    <div class="rules-block">
      <div class="rules-block-title">Format</div>
      ${['Every TikTok post must be exactly 5 slides.','No exceptions unless manually requested.','Optimize for swipe-through to Slide 5, not just views.'].map(r => `<div class="rule-row"><div class="rule-dot"></div><div>${r}</div></div>`).join('')}
    </div>
    <div class="rules-block">
      <div class="rules-block-title">★ Slide 2 Reward Rule — Most Important</div>
      <div class="rule-row"><div class="rule-dot"></div><div>Slide 1 creates curiosity. Slide 2 MUST reward it immediately.</div></div>
      <div class="rule-row"><div class="rule-dot"></div><div>The offer must be clear by Slide 2. Never be vague.</div></div>
      <div style="margin:10px 0 4px 15px;font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;">Bad Slide 2 examples</div>
      ${['"Here\'s why"','"Let me explain"','"Most people miss this"','"It\'s simpler than you think"'].map(e => `<div class="example-box bad">${e}</div>`).join('')}
      <div style="margin:10px 0 4px 15px;font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;">Good Slide 2 examples</div>
      ${['"It\'s a resume cleanup service."','"People pay to have their resumes cleaned up before they apply."','"You are not writing from scratch. You are cleaning up what they already have."'].map(e => `<div class="example-box good">${e}</div>`).join('')}
    </div>
    <div class="rules-block">
      <div class="rules-block-title">Language — Use</div>
      ${['resume cleanup service','AI-assisted resume cleanup','simple service business','beginner service business','extra income idea','make money helping people with resumes'].map(r => `<div class="rule-row"><div class="rule-dot green"></div><div>${r}</div></div>`).join('')}
    </div>
    <div class="rules-block">
      <div class="rules-block-title">Language — Avoid</div>
      ${['passive income','escape the 9-5','get rich quick','guaranteed income','easy money','professional resume writing','guru language','hype language'].map(r => `<div class="rule-row"><div class="rule-dot red"></div><div>${r}</div></div>`).join('')}
    </div>
    <div class="rules-block">
      <div class="rules-block-title">Tone</div>
      ${['calm','direct','practical','mature','honest','skeptical-buyer aware'].map(r => `<div class="rule-row"><div class="rule-dot green"></div><div>${r}</div></div>`).join('')}
    </div>
  `;
}

function renderLandingPage() {
  const container = document.getElementById('landingPageContent');
  container.innerHTML = LANDING_PAGE.map(block => `
    <div class="lp-block">
      <div class="lp-header">
        <div class="lp-label">${escapeHTML(block.label)}</div>
        <button class="btn btn-copy btn-sm" data-copy-text="${htmlEsc(block.body)}" onclick="copyTextFromBtn(this)">Copy</button>
      </div>
      <div class="lp-body">${escapeHTML(block.body)}</div>
    </div>
  `).join('');
}

function renderNextSteps() {
  const container = document.getElementById('nextStepsContent');
  container.innerHTML = `
    <div class="version-grid">
      <div class="version-card">
        <div class="version-badge v1">Version 1 — Now</div>
        <h3>Visual Rule-Based Dashboard</h3>
        <p>This is what you have. A fully functional offline dashboard that works in any browser.</p>
        <ul>
          <li>8 rule-based agents</li>
          <li>Post generator with 30 templates</li>
          <li>Performance tracker with localStorage</li>
          <li>CTA bank, DM replies, landing page copy</li>
          <li>Weekly calendar with 10 angles</li>
        </ul>
      </div>
      <div class="version-card">
        <div class="version-badge v2">Version 2 — Next</div>
        <h3>Connect to Claude / OpenAI API</h3>
        <p>Replace rule-based agents with real AI calls for more varied, context-aware output.</p>
        <ul>
          <li>Add API key input to each agent card</li>
          <li>Wire each "Run Agent" button to Claude Sonnet</li>
          <li>Use the RMM system prompt as context in every call</li>
          <li>Cache responses to save API costs</li>
        </ul>
      </div>
      <div class="version-card">
        <div class="version-badge v3">Version 3 — Later</div>
        <h3>Connect to Google Sheets or Airtable</h3>
        <p>Sync performance data and generated posts to a shared database.</p>
        <ul>
          <li>Auto-log every generated post</li>
          <li>Sync performance tracker to a spreadsheet</li>
          <li>Track which angles perform best over time</li>
          <li>Build angle performance leaderboard</li>
        </ul>
      </div>
      <div class="version-card">
        <div class="version-badge v4">Version 4 — Advanced</div>
        <h3>Schedule, Automate, and Analyze</h3>
        <p>Build a full content pipeline with automated scheduling and metric analysis.</p>
        <ul>
          <li>Auto-schedule posts via TikTok API or Buffer</li>
          <li>Send DM reminders when someone comments RESUME</li>
          <li>Auto-pull TikTok analytics into the tracker</li>
          <li>Weekly AI-generated performance report</li>
        </ul>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════════════════════
// POST GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════

function initPostGenerator() {
  document.getElementById('generateBtn').addEventListener('click', () => {
    const angle = document.getElementById('angleSelect').value;
    if (!angle) { showToast('Please select an angle first.'); return; }
    const templates = POST_TEMPLATES[angle];
    const t = templates[Math.floor(Math.random() * templates.length)];
    const angleLabel = document.getElementById('angleSelect').selectedOptions[0].text;

    const count = Number(localStorage.getItem('rmm_generated_posts') || 0) + 1;
    localStorage.setItem('rmm_generated_posts', count);

    document.getElementById('generatedPost').classList.remove('hidden');
    document.getElementById('generatedPost').innerHTML = `
      <div class="generated-post-card">
        <div class="post-angle-badge">${angleLabel}</div>
        <ul class="slides-list">
          <li class="slide-row">
            <div class="slide-badge">1</div>
            <div class="slide-body"><div class="slide-tag">Hook — Stop the scroll</div><div class="slide-text">${t.slide1}</div></div>
          </li>
          <li class="slide-row">
            <div class="slide-badge reward">2</div>
            <div class="slide-body"><div class="slide-tag">★ Reward Slide — Explain the mechanism</div><div class="slide-text">${t.slide2}</div></div>
          </li>
          <li class="slide-row">
            <div class="slide-badge">3</div>
            <div class="slide-body"><div class="slide-tag">Beginner-Friendly</div><div class="slide-text">${t.slide3}</div></div>
          </li>
          <li class="slide-row">
            <div class="slide-badge">4</div>
            <div class="slide-body"><div class="slide-tag">Tangible Value</div><div class="slide-text">${t.slide4}</div></div>
          </li>
          <li class="slide-row">
            <div class="slide-badge">5</div>
            <div class="slide-body"><div class="slide-tag">Soft CTA</div><div class="slide-text">${t.slide5}</div></div>
          </li>
        </ul>
        <div class="post-extras">
          <div class="extra-block"><label>Caption</label><p>${t.caption}</p></div>
          <div class="extra-block"><label>Hashtags</label><p>${t.hashtags}</p></div>
          <div class="extra-block"><label>Canva Notes</label><p>${t.canva}</p></div>
          <div class="extra-block"><label>DM Reply Template</label><p style="white-space:pre-line">${t.dm}</p></div>
        </div>
        <div class="post-action-bar">
          <button class="btn btn-copy" onclick="copyFullPost(this)">Copy Full Post</button>
          <button class="btn btn-secondary btn-sm" onclick="document.getElementById('generateBtn').click()">Regenerate</button>
        </div>
      </div>
    `;
    document.getElementById('generatedPost').scrollIntoView({behavior:'smooth', block:'start'});
    renderHome();
  });
}

function copyFullPost(btn) {
  const card = btn.closest('.generated-post-card');
  const slides = card.querySelectorAll('.slide-text');
  const extras = card.querySelectorAll('.extra-block');
  let text = '';
  slides.forEach((s, i) => {
    text += `Slide ${i + 1}: ${s.textContent.trim()}\n\n`;
  });
  extras.forEach(e => {
    const lbl = e.querySelector('label').textContent.trim();
    // Use innerText to preserve newlines set by white-space:pre-line
    const val = (e.querySelector('p').innerText || e.querySelector('p').textContent).trim();
    text += `${lbl}:\n${val}\n\n`;
  });
  const payload = text.trim();

  const doConfirm = () => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    showToast('Full post copied to clipboard.');
    setTimeout(() => { btn.textContent = 'Copy Full Post'; btn.classList.remove('copied'); }, 2200);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(payload).then(doConfirm).catch(() => fallbackCopy(payload, doConfirm));
  } else {
    fallbackCopy(payload, doConfirm);
  }
}

function fallbackCopy(text, onSuccess) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
  document.body.appendChild(ta);
  ta.select();
  try {
    const ok = document.execCommand('copy');
    if (ok) { if (onSuccess) onSuccess(); }
    else { showToast('Copy failed — try selecting text manually.'); }
  } catch (e) {
    showToast('Copy failed — try selecting text manually.');
  }
  document.body.removeChild(ta);
}

// ═══════════════════════════════════════════════════════════════════════════════
// PERFORMANCE TRACKER
// ═══════════════════════════════════════════════════════════════════════════════

function getEntries() {
  try { return JSON.parse(localStorage.getItem('rmm_entries') || '[]'); } catch { return []; }
}

function saveEntries(entries) {
  localStorage.setItem('rmm_entries', JSON.stringify(entries));
}

function initTracker() {
  // Set today's date as default
  const dateInput = document.getElementById('tDate');
  if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${tab}`).classList.add('active');
      if (tab === 'entries') renderEntries();
      if (tab === 'diagnostics') renderDiagnostics();
    });
  });

  document.getElementById('trackerForm').addEventListener('submit', e => {
    e.preventDefault();
    const entry = {
      id: Date.now(),
      date: document.getElementById('tDate').value,
      time: document.getElementById('tTime').value,
      angle: document.getElementById('tAngle').value,
      topic: document.getElementById('tTopic').value,
      views: Number(document.getElementById('tViews').value) || 0,
      dropoff: Number(document.getElementById('tDrop').value) || 0,
      swipe: Number(document.getElementById('tSwipe').value) || 0,
      comments: Number(document.getElementById('tComments').value) || 0,
      resumeComments: Number(document.getElementById('tResume').value) || 0,
      dms: Number(document.getElementById('tDMs').value) || 0,
      checklist: Number(document.getElementById('tChecklist').value) || 0,
      sales: Number(document.getElementById('tSales').value) || 0,
      notes: document.getElementById('tNotes').value
    };
    const entries = getEntries();
    entries.unshift(entry);
    saveEntries(entries);
    document.getElementById('trackerForm').reset();
    document.getElementById('tDate').value = new Date().toISOString().split('T')[0];
    showToast('Entry saved.');
    renderHome();
  });

  document.getElementById('clearAllBtn').addEventListener('click', () => {
    if (confirm('Delete all performance data? This cannot be undone.')) {
      localStorage.removeItem('rmm_entries');
      renderEntries();
      renderDiagnostics();
      renderHome();
      showToast('All data cleared.');
    }
  });
}

function renderEntries() {
  const entries = getEntries();
  const container = document.getElementById('entriesContainer');
  document.getElementById('entryCount').textContent = `${entries.length} ${entries.length === 1 ? 'entry' : 'entries'}`;
  if (entries.length === 0) {
    container.innerHTML = '<div class="no-data">No entries yet. Add your first post above.</div>';
    return;
  }
  container.innerHTML = entries.map(e => {
    const safeId    = Number(e.id) || 0;
    const safeViews = Number(e.views) || 0;
    const safeDrop  = Number(e.dropoff) || 0;
    const safeResCmts = Number(e.resumeComments) || 0;
    const safeSales = Number(e.sales) || 0;
    const dropClass = safeDrop > 70 ? 'bad' : safeDrop > 50 ? 'ok' : 'good';
    const safeAngle = escapeHTML(e.angle || '');
    const safeTopic = escapeHTML(e.topic || '');
    const safeNotes = escapeHTML(e.notes || '');
    const safeDate  = escapeHTML(e.date  || '');
    const safeTime  = escapeHTML(e.time  || '');
    return `
      <div class="entry-card">
        <div class="entry-head">
          <div class="entry-meta">
            <strong>${safeDate} — ${safeTime}</strong>
            <span>${safeAngle}${safeTopic ? ' · ' + safeTopic : ''}</span>
          </div>
          <button class="btn btn-danger btn-sm" data-entry-id="${safeId}" onclick="deleteEntry(+this.dataset.entryId)">Delete</button>
        </div>
        <div class="entry-metrics">
          <div class="m-box"><div class="m-val">${safeViews.toLocaleString()}</div><div class="m-lbl">Views</div></div>
          <div class="m-box"><div class="m-val ${dropClass}">${safeDrop}%</div><div class="m-lbl">S1→S2 Drop</div></div>
          <div class="m-box"><div class="m-val">${safeResCmts}</div><div class="m-lbl">RESUME cmts</div></div>
          <div class="m-box"><div class="m-val">${safeSales}</div><div class="m-lbl">Sales</div></div>
        </div>
        ${safeNotes ? `<div style="margin-top:10px;font-size:12px;color:var(--muted);padding-top:8px;border-top:1px solid var(--border);white-space:pre-line">${safeNotes}</div>` : ''}
      </div>
    `;
  }).join('');
}

function deleteEntry(id) {
  const entries = getEntries().filter(e => e.id !== id);
  saveEntries(entries);
  renderEntries();
  renderDiagnostics();
  renderHome();
  showToast('Entry deleted.');
}

function renderDiagnostics() {
  const entries = getEntries();
  const container = document.getElementById('diagnosticsContainer');
  if (entries.length === 0) {
    container.innerHTML = '<div class="no-data">Add entries in the "Add Entry" tab to see diagnostics.</div>';
    return;
  }
  const withDropoff = entries.filter(e => e.dropoff > 0);
  const avgDropoff = withDropoff.length ? Math.round(withDropoff.reduce((s,e) => s+e.dropoff,0)/withDropoff.length) : null;
  const totalViews = entries.reduce((s,e) => s+(e.views||0),0);
  const totalResume = entries.reduce((s,e) => s+(e.resumeComments||0),0);
  const totalSales = entries.reduce((s,e) => s+(e.sales||0),0);
  const totalDMs = entries.reduce((s,e) => s+(e.dms||0),0);
  const resumeRate = totalViews > 0 ? ((totalResume/totalViews)*100).toFixed(2) : '—';
  const dmToSale = totalDMs > 0 ? ((totalSales/totalDMs)*100).toFixed(0) : '—';

  const dropClass = avgDropoff === null ? '' : avgDropoff > 70 ? 'bad' : avgDropoff > 50 ? 'ok' : 'good';

  let diagnosis = '';
  if (avgDropoff !== null && avgDropoff > 70) {
    diagnosis = 'Slide 2 is likely too vague. Use a clear mechanism statement. Target: get below 50%.';
  } else if (avgDropoff !== null && avgDropoff > 50) {
    diagnosis = 'Getting better. Tighten Slide 2 further. Target: get below 40%.';
  } else if (avgDropoff !== null) {
    diagnosis = 'Good retention from Slide 1 to Slide 2. Keep this structure.';
  }

  container.innerHTML = `
    <div class="diag-card">
      <div class="diag-title">Avg Slide 1 → 2 Drop-off</div>
      <div class="diag-value ${dropClass}">${avgDropoff !== null ? avgDropoff + '%' : '—'}</div>
      <div class="diag-desc">${diagnosis || 'No dropoff data recorded yet.'}</div>
    </div>
    <div class="diag-card">
      <div class="diag-title">RESUME Comment Rate</div>
      <div class="diag-value">${resumeRate}${typeof resumeRate === 'string' && resumeRate !== '—' ? '%' : ''}</div>
      <div class="diag-desc">Target: >0.5% of views. ${totalViews > 0 ? `${totalResume} RESUME comments from ${totalViews.toLocaleString()} total views.` : ''}</div>
    </div>
    <div class="diag-card">
      <div class="diag-title">DM → Sale Rate</div>
      <div class="diag-value">${dmToSale}${typeof dmToSale === 'string' && dmToSale !== '—' ? '%' : ''}</div>
      <div class="diag-desc">${totalDMs > 0 ? `${totalSales} sales from ${totalDMs} DMs.` : 'No DM data yet.'} Improve with a better DM follow-up sequence.</div>
    </div>
    <div class="diag-card">
      <div class="diag-title">Total Tracked Sales</div>
      <div class="diag-value ${totalSales > 0 ? 'good' : ''}">${totalSales}</div>
      <div class="diag-desc">Total guide sales tracked across ${entries.length} logged posts. Revenue: $${totalSales * 20}.</div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════════════════════
// AGENT CENTER
// ═══════════════════════════════════════════════════════════════════════════════

function runAgent(id) {
  const agent = AGENTS.find(a => a.id === id);
  if (!agent) return;
  const input = document.getElementById(`input-${id}`).value.trim();
  const output = document.getElementById(`output-${id}`);
  if (!input) { output.textContent = '⚠️ Please enter some input first.'; output.classList.add('has-content'); return; }
  output.textContent = 'Running...';
  output.classList.add('has-content');
  setTimeout(() => {
    output.textContent = agent.run(input);
    output.classList.add('has-content');
  }, 300);
}

function copyAgentOutput(id, btn) {
  const output = document.getElementById(`output-${id}`).textContent;
  if (!output || output === 'Output will appear here...' || output === 'Running...') {
    showToast('Run the agent first.');
    return;
  }
  const confirm = () => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    showToast('Copied to clipboard.');
    setTimeout(() => { btn.textContent = 'Copy Output'; btn.classList.remove('copied'); }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(output).then(confirm).catch(() => fallbackCopy(output, confirm));
  } else {
    fallbackCopy(output, confirm);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

function copyText(text, btn) {
  const orig = btn.textContent;
  const confirm = () => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    showToast('Copied to clipboard.');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(confirm).catch(() => fallbackCopy(text, confirm));
  } else {
    fallbackCopy(text, confirm);
  }
}

// Escape text for safe insertion into HTML attribute values (double-quote delimited).
// The HTML parser decodes these back to original characters, so dataset.copyText
// always contains the original string — no double-encoding.
function htmlEsc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Escape text before inserting as innerHTML to prevent XSS from user-typed data.
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Read the pre-stored copy text from a data attribute and pass it to copyText.
// Used by copy buttons that need to avoid inline string-passing in onclick.
function copyTextFromBtn(btn) {
  copyText(btn.dataset.copyText || '', btn);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ═══════════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════════

function init() {
  initNav();
  renderHome();
  renderAgents();
  renderCTABank();
  renderDMReplies();
  renderCalendar();
  renderContentRules();
  renderLandingPage();
  renderNextSteps();
  initPostGenerator();
  initTracker();
}

document.addEventListener('DOMContentLoaded', init);
