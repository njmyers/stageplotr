# Stageplotr

Online stage plot software that actually works...

## Participants

Nick Myers, Jeff Hatcher

## Project Goals

To create a useable open source software that aids in the creation of a stage plots. This software will be free to use and will make use of modern advancements in front end development (JS). This will be a pure front end project and all the magic will happen in the browser.

The idea here is to create a quality software package that can be representative of team efforts. The software will be one single step larger in complexity then could be expected of a single developer maintaining and creating free software. The software will follow professional best practices and modern software trends so that the team can show itself as a reliable entity and members of the team can then represent themselves as having additional work experience with building and maintaining an actual software product from the ground up.

In short the goal here is collaboration but on something useful!

## Stack

Jeff feel free to adjust this... This is just what I am using at the moment and of course am open to any and all suggestions :)

### Core UI (I don't think we need anything else!?)

- React
- Redux

I have been using create-react-app and also react-static. RS is nice tool because it builds out your permanent routes and you can use a CRA style SPA architecture/process on top of it. It also includes code-splitting and other nice things out of the box while still being a fairly low overhead package.

### Design Code

- Sass (if you want to start using it we can it's up to you)

### Development Workflow

- Prettier
- Git Verson Control
- Flow?
- Storybook?

### Testing

Although I haven't been the biggest tester I think we should try to incorporate testing into this project. It will help us coordinate our efforts and is also inline with larger organizations and their best practices for development.

- Jest

# Project Structure

1.  Serializeable Projects

- JSON Format
- Cute file extension like file.stageplotr
- No database saving of documents at least at first
- Follows the model of the upload/download editors popular right now (vector graphics editors, image editors...)

2.  Interactive Drag and Droppable Canvas

- Icon Set - Guitars, Mics / Stands...
- Custom Text
- Resizeable Canvas with coordinate positions of elements (similar to SVG style)
- More Accurate Gender Representation (Let's not make all the women graphics singers here...)

3.  Basic Menu Style Helpers

- Undo Action
- Redo Action
- Download
- Upload
- Export (PDF, JPEG)
- Resize
- Rotate
- Flip Orientation

4.  JS Oriented Workflow
    Other release avenues if the project goes well

- Electron
- Native Apps

# Timeline Flow

Which order to do things...

1.  Develop Core Internal State Object
2.  Develop Redux State
3.  Map Redux State to React Components using placeholder graphics
4.  Add Dragging To Components
5.  Add Menu Functionality
6.  Add Interface to the Outside World (JSON/PDF/JPEG)
7.  Add Graphics

In the end we should be able to have a nice looking collaborative project that we can use to represent ourselves!

# Proposed Advanced Features

- HOTKEYS!
- Import Custom Icons
- Map Metadata like name
- Input List Generation?
