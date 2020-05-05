export const LAYOUT_SECTIONS = {
  Sidebar: 0,
  ProfilePhoto: 1,
  Main: 2
}

export const SECTIONS = {
  AboutMe: 0,
  Skills: 1,
  Experience: 2,
  Education: 3,
  ContactMe: 4
}

export const DEFAULT_SECTION = SECTIONS.AboutMe

export const TRANSITION_CLASS = 'isInTransition'

export const MENU_ITEMS = [
  [SECTIONS.AboutMe, 'fas fa-user', 'About Me'],
  [SECTIONS.Skills, 'fas fa-code', 'Skills'],
  [SECTIONS.Experience, 'fas fa-briefcase', 'Experience'],
  [SECTIONS.Education, 'fas fa-graduation-cap', 'Education'],
  [SECTIONS.ContactMe, 'fas fa-envelope', 'Contact Me']
]

export const SECTION_HEADERS = {
  [SECTIONS.AboutMe]: 'about me',
  [SECTIONS.Skills]: 'skills',
  [SECTIONS.Experience]: 'experience',
  [SECTIONS.Education]: 'education',
  [SECTIONS.ContactMe]: 'contact me'
}