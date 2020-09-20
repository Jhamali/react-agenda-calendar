# react-agenda-calendar

> Shows month, week, or day schedule

Made for a project I'm working on, but I thought it could be usefully in other projects, so I decided to make it as a separate project. I plan to add more, but if there are any desired features, feel free to create an issue, or make a merge request.

[![NPM](https://img.shields.io/npm/v/react-agenda-calendar.svg)](https://www.npmjs.com/package/react-agenda-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-agenda-calendar
yarn add react-agenda-calendar
```

## Example Images
Images can be found [here](https://github.com/Jhamali/react-schedule-calendar/tree/master/src/assets)

## Usage

```jsx
import React, { Component } from 'react'

import AgendaCalender from 'react-agenda-calendar'
import 'react-agenda-calendar/dist/index.css'

class Example extends Component {
  const agenda = [
    {
      title: "Title",
      startDate: {day: 1, month: 2, year: 2020},
      endDate: {day: 5, month: 2, year: 2020},
    }
  ]

  render() {
    return <AgendaCalender containerStyle={{height: "calc(100% - 51x)"}} containerClassName={styles.calenderContainer} agenda={agenda} currentDate={new Date(2004, 0, 6)} /></div>
  }
}
```

|   Prop Name         |  Description                  | Default Value |  Example Value  |
| ------------------- | ----------------------------- | ------------- | --------------- |
| containerStyle      | inline styling for container  |      N/A      | ```{height: "50%"}``` |
| containerClassName  | css className for container   |      N/A      |  css className, or css module |
|     agenda          | Array of events to be displayed.   |    []       |  ```[{  title: "Title", startDate: {day: 1, month: 2, year: 2020}, endDate: {day: 5, month: 2,year: 2020}}, {  title: "Title 2", startDate: {day: 23, month: 5, year: 2020}}] ```|
|    currentDate      | Date displayed on the calendar |  Today       |  ```new Date(2004, 0, 6)``` |

## License

MIT © [Jhamali](https://github.com/Jhamali)
