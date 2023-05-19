const skills = [
    {
      id: 1,
      name: 'HTML',
      level: 'Intermediate',
      experience: '3 years',
    },
    {
      id: 2,
      name: 'CSS',
      level: 'Advanced',
      experience: '5 years',
    },
    {
      id: 3,
      name: 'JavaScript',
      level: 'Expert',
      experience: '7 years',
    },
    {
      id: 4,
      name: 'Python',
      level: 'Intermediate',
      experience: '4 years',
    },
    {
      id: 5,
      name: 'Java',
      level: 'Advanced',
      experience: '6 years',
    },
    {
      id: 6,
      name: 'React',
      level: 'Expert',
      experience: '5 years',
    },
    {
      id: 7,
      name: 'Node.js',
      level: 'Intermediate',
      experience: '3 years',
    },
    {
      id: 8,
      name: 'SQL',
      level: 'Advanced',
      experience: '4 years',
    },
    {
      id: 9,
      name: 'C#',
      level: 'Intermediate',
      experience: '4 years',
    },
    {
      id: 10,
      name: 'Git',
      level: 'Advanced',
      experience: '5 years',
    },
    {
      id: 11,
      name: 'Ruby',
      level: 'Intermediate',
      experience: '3 years',
    },
    {
      id: 12,
      name: 'C++',
      level: 'Advanced',
      experience: '5 years',
    },
    {
      id: 13,
      name: 'Angular',
      level: 'Intermediate',
      experience: '4 years',
    },
    {
      id: 14,
      name: 'PHP',
      level: 'Advanced',
      experience: '6 years',
    },
    {
      id: 15,
      name: 'Swift',
      level: 'Intermediate',
      experience: '3 years',
    },
    {
      id: 16,
      name: 'Ruby on Rails',
      level: 'Advanced',
      experience: '5 years',
    },
    {
      id: 17,
      name: 'TypeScript',
      level: 'Intermediate',
      experience: '3 years',
    },
    {
      id: 18,
      name: 'Vue.js',
      level: 'Advanced',
      experience: '4 years',
    },
    {
      id: 19,
      name: 'Scala',
      level: 'Intermediate',
      experience: '3 years',
    },
    {
      id: 20,
      name: 'Rust',
      level: 'Advanced',
      experience: '4 years',
    },
    {
      id: 21,
      name: 'Kotlin',
      level: 'Intermediate',
      experience: '2 years',
    },
    {
      id: 22,
      name: 'Go',
      level: 'Advanced',
      experience: '3 years',
    },
    {
      id: 23,
      name: 'Docker',
      level: 'Intermediate',
      experience: '3 years',
    },
    {
      id: 24,
      name: 'AWS',
      level: 'Advanced',
      experience: '4 years',
    },
    {
      id: 25,
      name: 'GraphQL',
      level: 'Intermediate',
      experience: '2 years',
    }
]

const title = 'Lots of skills init'

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
  skill.id = Date.now() % 100000
  skills.push(skill)
}

module.exports = {
    getAll,
    getOne,
    title,
    create,
}