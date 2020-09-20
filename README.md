# react-schedule-calendar

> Shows month, week, or day schedule

Made for a project I'm working on, but I thought it could be usefully in other projects, so I decided to make it as a separate project. I plan to add more, but if there are any desired features, feel free to create an issue, or make a merge request.

[![NPM](https://img.shields.io/npm/v/react-schedule-calendar.svg)](https://www.npmjs.com/package/react-schedule-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-schedule-calendar
yarn add react-schedule-calendar
```

## Usage

```jsx
import React, { Component } from 'react'

import ScheduleCalender from 'react-schedule-calendar'
import 'react-schedule-calendar/dist/index.css'

class Example extends Component {
  const agenda = [
    {
      title: "Title",
      startDate: {day: 1, month: 2, year: 2020},
      endDate: {day: 5, month: 2, year: 2020},
    }
  ]

  render() {
    return <ScheduleCalender agenda={agenda} day={6} month={1} year={2004} />
  }
}
```

## License

MIT © [Jhamali](https://github.com/Jhamali)
