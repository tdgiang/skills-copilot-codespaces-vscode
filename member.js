function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'object',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'skills',
        type: 'array',
        of: [{ type: 'string' }],
        title: 'Skills',
      },
    ],
    preview: {
      select: {
        title: 'name',
        skills: 'skills',
      },
      prepare({ title, skills }) {
        return {
          title,
          subtitle: skills.join(', '),
        };
      },
    },
  };
}