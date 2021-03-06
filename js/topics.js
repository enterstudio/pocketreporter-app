// topics are from https://docs.google.com/spreadsheets/d/1A_dgJCYQsNZwxpeFDPWtdpihS0J2xvcXxhXJxZIHj10/edit#gid=0

var STORYCHECK_TOPICS = [
  {
    "icon": "fa-microphone",
    "id": "1",
    "name": "News conference",
    "questions": [
      {
        "key": "1",
        "question": "What were the major points made in the announcement of the press conference?"
      },
      {
        "key": "2",
        "question": "What are the names and job titles or official positions of speakers?"
      },
      {
        "key": "3",
        "question": "What is the background of major points of the conference?"
      },
      {
        "key": "4",
        "question": "What further info came out of the question and answer session?"
      },
      {
        "key": "5",
        "question": "What questions were not answered or avoided?"
      },
      {
        "key": "6",
        "question": "Tip: make sure you get copies of any handouts from the press conference"
      },
      {
        "key": "7",
        "question": "What are the contact details of the organisers (preferably phone numbers) in case of queries?"
      }
    ]
  },
  {
    "icon": "fa-comment",
    "id": "2",
    "name": "Speech",
    "questions": [
      {
        "key": "1",
        "question": "What was the speaker's main point?"
      },
      {
        "key": "10",
        "question": "Do you have copies of speeches and/or background documents?"
      },
      {
        "key": "11",
        "question": "What are the contact details (preferably phone numbers/business cards) of speakers in case of queries?"
      },
      {
        "key": "2",
        "question": "What is the name and title of the main speaker? (Make sure name is spelt correctly!)"
      },
      {
        "key": "3",
        "question": "What quotes do you have to support main point?"
      },
      {
        "key": "4",
        "question": "What was the purpose, time and location of the speech?"
      },
      {
        "key": "5",
        "question": "How many people attended and what was their makeup and reactions?"
      },
      {
        "key": "6",
        "question": "Did the speaker make any additional points?"
      },
      {
        "key": "7",
        "question": "What is the background to the major point they made?"
      },
      {
        "key": "8",
        "question": "What comments did the speaker's make before and after their speech?"
      },
      {
        "key": "9",
        "question": "Is there any additional info from the question and answer period"
      }
    ]
  },
  {
    "icon": "fa-flag",
    "id": "3",
    "name": "Protest March",
    "questions": [
      {
        "key": "1",
        "question": "Tip: Ensure you have a large scarf and a bottle of vinegar (soak scarf in vinegar if police use teargas) in case there is teargas?"
      },
      {
        "key": "10",
        "question": "Have there been any related protests in the past (how many, when and where) and was anything achieved?"
      },
      {
        "key": "11",
        "question": "How did the authorities and police respond to the protest?"
      },
      {
        "key": "12",
        "question": "Did police use any non-lethal force (teargas, rubber bullets) or lethal force (live ammunition), or both?"
      },
      {
        "key": "13",
        "question": "Was anyone injured? Who, how many and how badly?"
      },
      {
        "key": "14",
        "question": "To which hospitals/clinics were the injured taken for treatment?"
      },
      {
        "key": "15",
        "question": "If there are reports of violent force from police, do you have evidence and do you have a response from the police about this?"
      },
      {
        "key": "16",
        "question": "What is the current status of the protest?"
      },
      {
        "key": "2",
        "question": "What kind of protest is it? A march, a strike, a barricade?"
      },
      {
        "key": "3",
        "question": "Who are the main organisers of the protest? Get their official title, organisation and contact details."
      },
      {
        "key": "4",
        "question": "Was the protest planned or unplanned?"
      },
      {
        "key": "5",
        "question": "What is the reason for the protest?"
      },
      {
        "key": "6",
        "question": "Were any NGOs or political parties involved or related to the protest? Get their names, organisation, contact details and reason for involved."
      },
      {
        "key": "7",
        "question": "What is the size of the crowd: don't guess! Check with organisers and police."
      },
      {
        "key": "8",
        "question": "Get a quote from the organisers about the protest"
      },
      {
        "key": "9",
        "question": "Interview a minimum of 10 protesters: get their name, age, where they live, why they are protesting, what do they want to achieve?"
      }
    ]
  },
  {
    "icon": "fa-car",
    "id": "4",
    "name": "Motor Accidents",
    "questions": [
      {
        "key": "1",
        "question": "What time did the accident happen and where?"
      },
      {
        "key": "10",
        "question": "Where were the injured and dead taken? (Which hospital or morgue?)"
      },
      {
        "key": "11",
        "question": "Were there any acts of bravery or any rescues?"
      },
      {
        "key": "12",
        "question": "Were there any arrests or other legal action?"
      },
      {
        "key": "13",
        "question": "What is the damage to the vehicles?"
      },
      {
        "key": "14",
        "question": "What was the speed of vehicles involved?"
      },
      {
        "key": "15",
        "question": "Where were they coming from/going to?"
      },
      {
        "key": "16",
        "question": "Were there any strange weather or road conditions that could have caused the accident?"
      },
      {
        "key": "17",
        "question": "What happened according to eyewitnesses, investigating officers and people involved in incident?"
      },
      {
        "key": "18",
        "question": "What are the funeral arrangements for the dead?"
      },
      {
        "key": "2",
        "question": "Were any people injured or dead and how many?"
      },
      {
        "key": "3",
        "question": "What type of vehicles were involved?"
      },
      {
        "key": "4",
        "question": "What is the identification of the drivers involved?  Names, ages, addresses, other personal information."
      },
      {
        "key": "5",
        "question": "What was the cause of the accident? (according to paramedics, police or other official sources)"
      },
      {
        "key": "6",
        "question": "What is the identification of any others involved? (Passengers, pedestrians.)"
      },
      {
        "key": "7",
        "question": "What is the identification of the injured and dead?"
      },
      {
        "key": "8",
        "question": "What is the extent of any injuries?"
      },
      {
        "key": "9",
        "question": "What is the condition of the injured?"
      }
    ]
  },
  {
    "icon": "fa-medkit",
    "id": "5",
    "name": "Health Services",
    "questions": [
      {
        "key": "1",
        "question": "What is the name of the hospital or clinic and where is it situated?"
      },
      {
        "key": "10",
        "question": "What is the response from officials responsible for delivering the service?"
      },
      {
        "key": "11",
        "question": "Have patients visited the facility previously? If yes, was their file available when they were treated?"
      },
      {
        "key": "12",
        "question": "What distance did patients you interviewed have to travel to get there?"
      },
      {
        "key": "13",
        "question": "How did they get there? (bus, taxi, train, walk)"
      },
      {
        "key": "14",
        "question": "What was the cost of their return fare?"
      },
      {
        "key": "2",
        "question": "What services are not being offered when they should be? (areas of lack of service delivery)"
      },
      {
        "key": "3",
        "question": "Why are these services no longer being offered?"
      },
      {
        "key": "4",
        "question": "Who is affected by this? (A particular group of people / area and what are their socio-economic backgrounds?"
      },
      {
        "key": "5",
        "question": "How many people are affected, at risk or in danger because of the withdrawal of these services?"
      },
      {
        "key": "6",
        "question": "What are the names and ages of those affected and what are their experiences?"
      },
      {
        "key": "7",
        "question": "How long do patients wait to be seen by doctors/health workers?"
      },
      {
        "key": "8",
        "question": "Is there sufficient - and the correct - medication available?"
      },
      {
        "key": "9",
        "question": "Who is responsible for delivering the services?"
      }
    ]
  },
  {
    "icon": "fa-gavel",
    "id": "6",
    "name": "Courts - Civil Action",
    "questions": [
      {
        "key": "1",
        "question": "Who is the person or organisation filing the action? Names, ages, addresses, other personal information."
      },
      {
        "key": "10",
        "question": "Could this suit lead to a landmark action? Is it a precedent?"
      },
      {
        "key": "11",
        "question": "Is there a possibility of an out-of-court settlement?"
      },
      {
        "key": "12",
        "question": "What is the significance of the action and the effect on others?"
      },
      {
        "key": "13",
        "question": "What are the names of the lawyers for both sides? (Check spelling!)"
      },
      {
        "key": "14",
        "question": "What is the date and who is the presiding judge for the trial or hearing?"
      },
      {
        "key": "2",
        "question": "What is the background of the plaintiff or petitioner: the person filing the action?"
      },
      {
        "key": "3",
        "question": "What is the background of the defendant or respondent?"
      },
      {
        "key": "4",
        "question": "What type of damage is alleged?"
      },
      {
        "key": "5",
        "question": "What is the outcome being sought?"
      },
      {
        "key": "6",
        "question": "What is the date of filing of the application and which is the court of jurisdiction?"
      },
      {
        "key": "7",
        "question": "Is there a special motivation behind the action (if any)?"
      },
      {
        "key": "8",
        "question": "What is the background to the conflict/disagreement?"
      },
      {
        "key": "9",
        "question": "Are there or have there been any similar cases decided by courts (precedents)?"
      }
    ]
  },
  {
    "icon": "fa-gavel",
    "id": "7",
    "name": "Courts - Verdict",
    "questions": [
      {
        "key": "1",
        "question": "What is the verdict and damages, if awarded? (Same, less, greater than the damages sought?)"
      },
      {
        "key": "2",
        "question": "Who are the parties involved?"
      },
      {
        "key": "3",
        "question": "Did the judge  make a statement? Did it deviate from assessor's findings?"
      },
      {
        "key": "4",
        "question": "Give a summary of the allegations by plaintiff?"
      },
      {
        "key": "5",
        "question": "What was the key testimony and attorney/advocate's main points?"
      },
      {
        "key": "6",
        "question": "For how long did the court deliberate before judgement?"
      },
      {
        "key": "7",
        "question": "Are there any appeals or motions?"
      }
    ]
  },
  {
    "icon": "fa-gavel",
    "id": "8",
    "name": "Crime",
    "questions": [
      {
        "key": "1",
        "question": "What is the name and details of the victims? Names, ages, addresses, other personal information."
      },
      {
        "key": "2",
        "question": "What was the crime and how was it committed?"
      },
      {
        "key": "3",
        "question": "What is the date, time and location of the crime? Confirm with official sources."
      },
      {
        "key": "4",
        "question": "In the case of death, what was the official cause? (According to paramedics, police or other official sources.)"
      },
      {
        "key": "5",
        "question": "What injuries did the victims suffer and what weapon was used?"
      },
      {
        "key": "6",
        "question": "What was the motivation for the crime and what is the background of victim? (if relevant?)"
      },
      {
        "key": "7",
        "question": "Have there been any arrests and are there any suspects or clues?"
      },
      {
        "key": "8",
        "question": "Are there any strange circumstances surrounding the crime?"
      },
      {
        "key": "9",
        "question": "Get comment from the victim, witnesses, police and other official sources."
      }
    ]
  },
  {
    "icon": "fa-fire",
    "id": "9",
    "name": "Fires",
    "questions": [
      {
        "key": "1",
        "question": "How many people are dead and injured?"
      },
      {
        "key": "10",
        "question": "Were there any acts of bravery or any rescues?"
      },
      {
        "key": "11",
        "question": "Get comments from neighbours, eyewitnesses."
      },
      {
        "key": "12",
        "question": "How many fire engines and firefighters involved?"
      },
      {
        "key": "13",
        "question": "Sources: Fire chief, police, rescue services, hospital, mortuary, welfare agencies"
      },
      {
        "key": "2",
        "question": "What is the identification of victims? Names, ages, addresses, other personal information."
      },
      {
        "key": "3",
        "question": "Where was the fire and what was burning (a building, house, field, etc.)?"
      },
      {
        "key": "4",
        "question": "When did the fire start, where and how did it spread?"
      },
      {
        "key": "5",
        "question": "When and after how long was it brought under control?"
      },
      {
        "key": "6",
        "question": "How were victims killed and injured and what is the extent of the injuries?"
      },
      {
        "key": "7",
        "question": "Property loss: what is the extent, cost of damage, insurance? You may need to phone an expert."
      },
      {
        "key": "8",
        "question": "Investigation: any unusual circumstances?"
      },
      {
        "key": "9",
        "question": "Where were the injured and dead taken? (Which hospital or morgue?)"
      }
    ]
  },
  {
    "icon": "fa-soccer-ball-o",
    "id": "10",
    "name": "Sports",
    "questions": [
      {
        "key": "1",
        "question": "What type of sport are you reporting on?"
      },
      {
        "key": "10",
        "question": "Get comments from coaches, players and fans of both teams."
      },
      {
        "key": "11",
        "question": "What was the crowd size and how was their behaviour?"
      },
      {
        "key": "12",
        "question": "Were there any injuries?"
      },
      {
        "key": "13",
        "question": "How long was the game and did they run into extra time?"
      },
      {
        "key": "14",
        "question": "What are the game's statistics?"
      },
      {
        "key": "2",
        "question": "What is the name of the teams playing?"
      },
      {
        "key": "3",
        "question": "What was the final score?"
      },
      {
        "key": "4",
        "question": "Where and when did game take place?"
      },
      {
        "key": "5",
        "question": "What was the key play, strategy"
      },
      {
        "key": "6",
        "question": "Who were the outstanding players?"
      },
      {
        "key": "7",
        "question": "What effect does the result have on standings, rankings, individual records?"
      },
      {
        "key": "8",
        "question": "What was the scoring pattern of the game?"
      },
      {
        "key": "9",
        "question": "Are there any winning/losing streaks, records involved by team, player?"
      }
    ]
  },
  {
    "icon": "fa-medkit",
    "id": "11",
    "name": "Specific Illness",
    "questions": [
      {
        "key": "1",
        "question": "What is the name of the sickness/condition that the patient has?"
      },
      {
        "key": "2",
        "question": "What are the main symptoms?"
      },
      {
        "key": "3",
        "question": "What treatment did they receive?"
      },
      {
        "key": "4",
        "question": "Where are they are being treated?"
      },
      {
        "key": "5",
        "question": "Is the illness contagious and have there been any other reports of it locally or abroad?"
      },
      {
        "key": "6",
        "question": "What is the identification of victims? Names, ages, addresses, other personal information."
      },
      {
        "key": "7",
        "question": "What comments, if any, did health workers make on the sickness?"
      },
      {
        "key": "8",
        "question": "What distance did patients you interviewed have to travel to get there and what is the cost of their return fares?"
      }
    ]
  },
  {
    "icon": "fa-user",
    "id": "12",
    "name": "Biography",
    "questions": [
      {
        "key": "1",
        "question": "What is the full name of the person you're writing about?"
      },
      {
        "key": "10",
        "question": "Details of awards / honours / formal recognition."
      },
      {
        "key": "12",
        "question": "Summarise any of their major contributions to society and the world."
      },
      {
        "key": "13",
        "question": "List at least THREE major political or social events which occurred during this person's life. For each event, explain how it may have affected your biographical subject."
      },
      {
        "key": "2",
        "question": "What is their age and date of birth?"
      },
      {
        "key": "3",
        "question": "What is their place of birth and where did they live?"
      },
      {
        "key": "6",
        "question": "What is their physical description? (This is important to add colour to your piece.)"
      },
      {
        "key": "7",
        "question": "Details of their character and personality? (Ask family and friends.)"
      },
      {
        "key": "8",
        "question": "Details of their education? (Include any degrees earned.)"
      },
      {
        "key": "9",
        "question": "Details of personal relationships with family, friends, work colleagues."
      }
    ]
  },
  {
    "icon": "fa-user",
    "id": "13",
    "name": "Obituaries",
    "questions": [
      {
        "key": "1",
        "question": "What is the name, age, address, occupation of the deceased?"
      },
      {
        "key": "10",
        "question": "Anecdotes, recollections of friends, relatives?"
      },
      {
        "key": "2",
        "question": "What was the time, place and cause of death?"
      },
      {
        "key": "3",
        "question": "What is the person's birthdate, birthplace?"
      },
      {
        "key": "4",
        "question": "Who are they survived by? (immediate family)"
      },
      {
        "key": "5",
        "question": "What are the funeral and burial arrangements?"
      },
      {
        "key": "6",
        "question": "What are the deceased's accomplishments?"
      },
      {
        "key": "7",
        "question": "What are the details of their education?"
      },
      {
        "key": "8",
        "question": "Were they members of any clubs or societies, such as a stokvel, Rotary or Lions?"
      },
      {
        "key": "9",
        "question": "Did they do military service? (formal or otherwise)"
      }
    ]
  },
  {
    "icon": "fa-bullhorn",
    "id": "14",
    "name": "Political rally",
    "questions": [
      {
        "key": "1",
        "question": "Have you got copies or recordings of the main speakers\u2019 speeches?"
      },
      {
        "key": "10",
        "question": "Did you take down their contact details?"
      },
      {
        "key": "11",
        "question": "Did you contact the interviewees for responses to the main speaker\u2019s speech afterwards?"
      },
      {
        "key": "12",
        "question": "Did the interviewees believe the promises made by the speakers (and why)?"
      },
      {
        "key": "13",
        "question": "What sort of reception did the main speaker, and others, receive from the crowd?"
      },
      {
        "key": "14",
        "question": "What was the crowd\u2019s general mood and ambience?"
      },
      {
        "key": "15",
        "question": "Did you ensure that your business card was circulated to as many people as possible, especially those interviewed?"
      },
      {
        "key": "2",
        "question": "Have you confirmed the approximate crowd numbers with an independent source (police or venue management)?"
      },
      {
        "key": "3",
        "question": "Were there incidents of violence and/or injuries that can be confirmed with an independent source (police and emergency services)?"
      },
      {
        "key": "4",
        "question": "Have you conducted a minimum of 10 interviews with rally attendees from separate parts of the venue?"
      },
      {
        "key": "5",
        "question": "Did you establish where they live and what the socio-economic and political issues that affect them in these towns/areas/wards/streets were?"
      },
      {
        "key": "6",
        "question": "Did you get the biographical details of those interviewed, including ages, education levels, employment status and number of dependents?"
      },
      {
        "key": "7",
        "question": "Why did the interviewees attend the rally and what did they hope would come out of attending?"
      },
      {
        "key": "8",
        "question": "Where any attendees given a free lunch and a T-shirt in exchange for their presence?"
      },
      {
        "key": "9",
        "question": "Did you interview a wide spectrum of people living in different geographical areas and with different socio-economic backgrounds?"
      }
    ]
  },
  {
    "icon": "fa-group",
    "id": "15",
    "name": "Election meeting",
    "questions": [
      {
        "key": "1",
        "question": "Have you established whether it is a political party branch meeting, a town hall meeting, ward councillor feedback session, a debate between political parties, a meeting of disaffected community members et cetera?"
      },
      {
        "key": "10",
        "question": "Have you confirmed the biographical details of those interviewed, including ages, education levels, employment status and number of dependents?"
      },
      {
        "key": "11",
        "question": "Did the interviewees express any changes in their everyday condition since the previous election?"
      },
      {
        "key": "12",
        "question": "Have you asked them how effective and accessible the current councillors are?"
      },
      {
        "key": "13",
        "question": "Have you asked them how voting works?"
      },
      {
        "key": "14",
        "question": "What were the reasons for people to attend the meeting?"
      },
      {
        "key": "15",
        "question": "Do they believe the promises made by the speakers?"
      },
      {
        "key": "16",
        "question": "The contact numbers of all interviewees noted?"
      },
      {
        "key": "2",
        "question": "What is the main topic or theme?"
      },
      {
        "key": "3",
        "question": "Did you get the organisers\u2019 contact details?"
      },
      {
        "key": "4",
        "question": "Have you double-checked the correct spelling and address of the venue?"
      },
      {
        "key": "5",
        "question": "Have you confirmed official attendance at the event with an independent source (police or venue management)?"
      },
      {
        "key": "6",
        "question": "Have you confirmed any incidents of violence and/or injuries with an independent source (police, emergency services or venue management)?"
      },
      {
        "key": "7",
        "question": "Have you conducted a minimum of ten interviews with attendees from separate parts of the venue?"
      },
      {
        "key": "8",
        "question": "Where do those interviewed live?"
      },
      {
        "key": "9",
        "question": "What are the socio-economic and political issues that affect them in these towns/areas/wards/streets?"
      }
    ]
  },
  {
    "icon": "fa-check-square-o",
    "id": "16",
    "name": "Election day",
    "questions": [
      {
        "key": "1",
        "question": "Have you established contact and obtained contact details with the electoral officer in charge of the voting station?"
      },
      {
        "key": "10",
        "question": "Have you asked if there any inconsistencies during the counting process?"
      },
      {
        "key": "11",
        "question": "Did you establish and keep in continuous contact with the various political party representatives in the polling station who are also observing and ensuring the process is free and fair?"
      },
      {
        "key": "12",
        "question": "Did you check in with them on any alleged irregularities on a regular basis?"
      },
      {
        "key": "2",
        "question": "Have you observed and noted the electoral officers\u2019 relationship and conduct with the different various political parties?"
      },
      {
        "key": "3",
        "question": "Have you made notes about whether any of the behaviour pf the officers suggest favouritism or underline impartiality?"
      },
      {
        "key": "4",
        "question": "What degree of freedom did political parties enjoy outside voting stations?"
      },
      {
        "key": "5",
        "question": "Have you asked whether the party representatives were allowed to move around, organise and express their views outside the voting station?"
      },
      {
        "key": "6",
        "question": "Have you asked whether any parties were allowed to electioneer on the voting station premises itself?"
      },
      {
        "key": "7",
        "question": "Have you checked who the party agents are inside of the voting stations, and asked whether they had any concerns about the voting process?"
      },
      {
        "key": "8",
        "question": "Have you taken note of the conduct of electoral officers during voting and counting?"
      },
      {
        "key": "9",
        "question": "Have you noted whether there were impediments to free and fair voting and counting?"
      }
    ]
  },
  {
    "icon": "fa-hospital-o",
    "id": "17",
    "name": "Incident at Public Health Facility",
    "questions": [
      {
        "key": "1",
        "question": "Patient\u2019s name and age?"
      },
      {
        "key": "10",
        "question": "Does patient/family believe they have adequate access to the health care services they need?"
      },
      {
        "key": "11",
        "question": "How far did they have to travel to get treated?"
      },
      {
        "key": "12",
        "question": "Any additional comments? NB: If a healthcare worker is named, they must be given the right to respond to allegations against them. This is usually done through the Department of Health. Even if no health official is named, you still need to get Department of Health comment"
      },
      {
        "key": "13",
        "question": "Contact details: phone number/email for your source/other useful contacts for your story"
      },
      {
        "key": "2",
        "question": "Why did they seek help (what was wrong with them)?"
      },
      {
        "key": "3",
        "question": "Name of public health institution that the patient visited?"
      },
      {
        "key": "4",
        "question": "How long did they wait before being attended to?"
      },
      {
        "key": "5",
        "question": "Were they satisfied with the level of care they received? (treatment, medication)"
      },
      {
        "key": "6",
        "question": "If they were unhappy, why?"
      },
      {
        "key": "7",
        "question": "Names of the health officials they say did not treat them well?"
      },
      {
        "key": "8",
        "question": "Were they referred to any other health institution for help?"
      },
      {
        "key": "9",
        "question": "If yes, where and what treatement did they get?"
      }
    ]
  },
  {
    "icon": "fa-user",
    "id": "18",
    "name": "Gender-based violence",
    "questions": [
      {
        "key": "1",
        "question": "Who was involved in the incident?"
      },
      {
        "key": "10",
        "question": "Have there been any court appearances? If yes, when and where? (If the matter was remanded make a note of the date to follow up)"
      },
      {
        "key": "11",
        "question": "What concerns does the victim have to share?"
      },
      {
        "key": "12",
        "question": "Any additional information?"
      },
      {
        "key": "13",
        "question": "Contact details: phone number/email for your source/other useful contacts for your story?"
      },
      {
        "key": "2",
        "question": "When, where and what happened?"
      },
      {
        "key": "3",
        "question": "Do the perpetrator and survivor know each other? If yes, what is the nature of their relationship?"
      },
      {
        "key": "4",
        "question": "If they are not known to each other, how did the abuser come into contact with the survivor?"
      },
      {
        "key": "5",
        "question": "Did the survivor seek help from a health centre/hospital/clinic?"
      },
      {
        "key": "6",
        "question": "If yes, where? And what treatment did they receive? In the case of rape which of these treatments were they offered? (HIV test, emergency contraception, antibiotics and counselling)"
      },
      {
        "key": "7",
        "question": "Has the incident been reported the police?"
      },
      {
        "key": "8",
        "question": "If yes, how did the police respond to the complaint?"
      },
      {
        "key": "9",
        "question": "Police\u2019s response to your media query?"
      }
    ]
  },
  {
    "icon": "fa-ambulance",
    "id": "19",
    "name": "Emergency services",
    "questions": [
      {
        "key": "1",
        "question": "How do people in need of emergency treatment get to nearest healthcare centre?"
      },
      {
        "key": "2",
        "question": "If by public transport or a taxi how far did they travel, and cost of the return trip"
      },
      {
        "key": "3",
        "question": "If they rely on ambulances, are calls to emergency numbers answered promptly?"
      },
      {
        "key": "4",
        "question": "How long does an ambulance usually take to get to them?"
      },
      {
        "key": "5",
        "question": "If an ambulance does not arrive, what other options do patients have?"
      },
      {
        "key": "6",
        "question": "Has the Department of Health been notified of any problems?"
      },
      {
        "key": "7",
        "question": "How has the Department of Health responded to the community\u2019s concerns?"
      },
      {
        "key": "8",
        "question": "Any more comments?"
      },
      {
        "key": "9",
        "question": "Contact details: phone number/email for your source/other useful contacts for your story?"
      }
    ]
  },
  {
    "icon": "fa-h-square",
    "id": "20",
    "name": "Health infrastructure: Building & equipment",
    "questions": [
      {
        "key": "1",
        "question": "Where is the building situated?"
      },
      {
        "key": "10",
        "question": "How long will it take to fix?"
      },
      {
        "key": "11",
        "question": "Any more comments?"
      },
      {
        "key": "12",
        "question": "Contact details: phone number/email for your source/other useful contacts for your story?"
      },
      {
        "key": "2",
        "question": "What condition is it in?"
      },
      {
        "key": "3",
        "question": "Which department is responsible for maintaining the infrastructure?"
      },
      {
        "key": "4",
        "question": "Were responsible officials notified of the conditions?"
      },
      {
        "key": "5",
        "question": "What was their response?"
      },
      {
        "key": "6",
        "question": "What risks does the structure pose to people who are exposed to the conditions as they are? (e.g. damp, broken windows etc)."
      },
      {
        "key": "7",
        "question": "Are health services being affected by any of these conditions?"
      },
      {
        "key": "8",
        "question": "Have other plans been put in place while solutions are being sought?"
      },
      {
        "key": "9",
        "question": "Who is affected?"
      }
    ]
  },
  {
    "icon": "fa-user",
    "id": "21",
    "name": "Lack of Water",
    "questions": [
      {
        "key": "1",
        "question": "Does your source have access to a reliable source of clean water?"
      },
      {
        "key": "10",
        "question": "What is the municipality\u2019s response to your queries?"
      },
      {
        "key": "11",
        "question": "Is there anything you wish to add?"
      },
      {
        "key": "12",
        "question": "Contact details: phone number/email for your source/other useful contacts for your story?"
      },
      {
        "key": "2",
        "question": "Is there a disruption in water services?"
      },
      {
        "key": "3",
        "question": "If yes, what is the problem?"
      },
      {
        "key": "4",
        "question": "What has caused disruptions with water services? (e.g. drought, damaged pipes, lack of maintenance etc)"
      },
      {
        "key": "5",
        "question": "What areas are affected?"
      },
      {
        "key": "6",
        "question": "How long has this been going on?"
      },
      {
        "key": "7",
        "question": "How are affected residents getting water?"
      },
      {
        "key": "8",
        "question": "Which municipality is responsible and is it aware of the problem?"
      },
      {
        "key": "9",
        "question": "Has the community engaged with the municipality?"
      }
    ]
  },
  {
    "icon": "fa-user",
    "id": "22",
    "name": "Sanitation issues",
    "questions": [
      {
        "key": "1",
        "question": "What kind of toilets do the community/ facility have? (There may be a combo of communal/chemical/flush etc)"
      },
      {
        "key": "2",
        "question": "How many people have to share one toilet?"
      },
      {
        "key": "3",
        "question": "If there are too few toilets, has the community complained to the municipality or their councillor? (If yes, when? If no, why not?)"
      },
      {
        "key": "4",
        "question": "Municipality\u2019s response to the situation?"
      },
      {
        "key": "5",
        "question": "Municipality\u2019s response to your media query?"
      },
      {
        "key": "6",
        "question": "Is there anything you wish to add?"
      }
    ]
  },
  {
    "icon": "fa-cutlery",
    "id": "23",
    "name": "Nutrition",
    "questions": [
      {
        "key": "1",
        "question": "How much does your source spend a day/week/month on food for themselves?"
      },
      {
        "key": "10",
        "question": "What portion of the household income is spent on food?"
      },
      {
        "key": "11",
        "question": "Any comments you wish to add regarding this story?"
      },
      {
        "key": "12",
        "question": "Contact details: phone number/email for your source/other useful contacts for your story?"
      },
      {
        "key": "2",
        "question": "What does your source/their family eat and drink most of the time?"
      },
      {
        "key": "3",
        "question": "How many meals a day do they eat?"
      },
      {
        "key": "4",
        "question": "How long have they been eating this way?"
      },
      {
        "key": "5",
        "question": "Any health impact this diet has on them? (e.g. Diabetes, high blood pressure, stroke, heart problems?)"
      },
      {
        "key": "6",
        "question": "Have they sought medical attention?"
      },
      {
        "key": "7",
        "question": "What advice did they get from doctor/nurses regarding their diet?"
      },
      {
        "key": "8",
        "question": "How many people are in their household?"
      },
      {
        "key": "9",
        "question": "What is the main source of income for the family?"
      }
    ]
  }
];
