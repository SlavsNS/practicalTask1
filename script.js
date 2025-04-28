
// const mainFrame = document.createElement("div")
// mainFrame.classList.add("mainFrame")
//
// const fullTimeResultFrame = document.createElement("div")
// const fullTimeResultTopFrame = document.createElement("div")
// const fullTimeResultBottomFrame = document.createElement("div")
// const fullTimeResultText = document.createElement("div")
// fullTimeResultFrame.classList.add("fullTimeResultFrame")
// fullTimeResultTopFrame.classList.add("fullTimeResultTopFrame")
// fullTimeResultBottomFrame.classList.add("fullTimeResultBottomFrame")
// fullTimeResultFrame.classList.add("fullTimeResultText")
// fullTimeResultFrame.append(fullTimeResultTopFrame)
// fullTimeResultFrame.append(fullTimeResultBottomFrame)
// mainFrame.append(fullTimeResultFrame)
//
// const doubleChanceFrame = document.createElement("div")
// const doubleChanceTopFrame = document.createElement("div")
// const doubleChanceBottomFrame = document.createElement("div")
// const doubleChanceText = document.createElement("div")
// doubleChanceFrame.classList.add("doubleChanceFrame")
// doubleChanceTopFrame.classList.add("doubleChanceTopFrame")
// doubleChanceBottomFrame.classList.add("doubleChanceBottomFrame")
// doubleChanceFrame.classList.add("doubleChanceText")
// doubleChanceFrame.append(doubleChanceTopFrame)
// doubleChanceFrame.append(doubleChanceBottomFrame)
// mainFrame.append(doubleChanceFrame)
//
// const teamsScoreFrame = document.createElement("div")
// const teamsScoreTopFrame = document.createElement("div")
// const teamsScoreBottomFrame = document.createElement("div")
// const teamsScoreText = document.createElement("div")
// teamsScoreFrame.classList.add("teamsScoreFrame")
// teamsScoreTopFrame.classList.add("teamsScoreTopFrame")
// teamsScoreBottomFrame.classList.add("teamsScoreBottomFrame")
// teamsScoreFrame.classList.add("teamsScoreText")
// teamsScoreFrame.append(teamsScoreTopFrame)
// teamsScoreFrame.append(teamsScoreBottomFrame)
// mainFrame.append(teamsScoreFrame)
//
// const totalGoalsFrame = document.createElement("div")
// const totalGoalsTopFrame = document.createElement("div")
// const totalGoalsBottomFrame = document.createElement("div")
// const totalGoalsText = document.createElement("div")
// totalGoalsFrame.classList.add("totalGoalsFrame")
// totalGoalsTopFrame.classList.add("totalGoalsTopFrame")
// totalGoalsBottomFrame.classList.add("totalGoalsBottomFrame")
// totalGoalsFrame.classList.add("totalGoalsText")
// totalGoalsFrame.append(totalGoalsTopFrame)
// totalGoalsFrame.append(totalGoalsBottomFrame)
// mainFrame.append(totalGoalsFrame)
//
// const handicapFrame = document.createElement("div")
// const handicapTopFrame = document.createElement("div")
// const handicapBottomFrame = document.createElement("div")
// const handicapText = document.createElement("div")
// handicapFrame.classList.add("handicapFrame")
// handicapTopFrame.classList.add("handicapTopFrame")
// handicapBottomFrame.classList.add("handicapBottomFrame")
// handicapFrame.classList.add("handicapText")
// handicapFrame.append(handicapTopFrame)
// handicapFrame.append(handicapBottomFrame)
// mainFrame.append(handicapFrame)
//
// const halfTimeResultFrame = document.createElement("div")
// const halfTimeResultTopFrame = document.createElement("div")
// const halfTimeResultBottomFrame = document.createElement("div")
// const halfTimeResultText = document.createElement("div")
// halfTimeResultFrame.classList.add("halfTimeResultFrame")
// halfTimeResultTopFrame.classList.add("halfTimeResultTopFrame")
// halfTimeResultBottomFrame.classList.add("halfTimeResultBottomFrame")
// halfTimeResultFrame.classList.add("halfTimeResultText")
// halfTimeResultFrame.append(halfTimeResultTopFrame)
// halfTimeResultFrame.append(halfTimeResultBottomFrame)
// mainFrame.append(halfTimeResultFrame)
//
// document.body.append(mainFrame)


// const mainContainer = document.createElement("div")
// mainContainer.classList.add("mainContainer")
//
// function containerInUpperContainer(name, upperContainer) {
//     if (!upperContainer) {
//         console.error("Upper container not found");
//         return null;
//     }
//     const newContainer = document.createElement("div")
//     newContainer.classList.add(name)
//     upperContainer.append(newContainer)
//     return newContainer
// }
//
// function textContainerInContainer(name, container, content) {
//     if (!container) {
//         console.error("Сontainer not found");
//         return null;
//     }
//     const textContainer = document.createElement("div")
//     textContainer.classList.add(name)
//     if (content) textContainer.textContent = content
//     container.append(textContainer)
//     return textContainer
// }

// Fulltime result
// const fullTimeResultContainer = containerInUpperContainer("fullTimeResultContainer", mainContainer)
// const fullTimeResultTopContainer = containerInUpperContainer("fullTimeResultTopContainer", fullTimeResultContainer)
// const fullTimeResultTextTopContainer = textContainerInContainer("fullTimeResultTextTopContainer", fullTimeResultTopContainer, "Fulltime Result")
//
// const fullTimeResultBottomContainer = containerInUpperContainer("fullTimeResultBottomContainer", fullTimeResultContainer)
//
// const fullTimeResultContainerBottomContainer1 = containerInUpperContainer("fullTimeResultContainerBottomContainer1", fullTimeResultBottomContainer)
// const fullTimeResultText1Container1BottomContainer = textContainerInContainer("fullTimeResultText1Container1BottomContainer", fullTimeResultContainerBottomContainer1, "RVP")
// const fullTimeResultText2Container1BottomContainer = textContainerInContainer("fullTimeResultText2Container1BottomContainer", fullTimeResultContainerBottomContainer1, "5.00")
//
// const fullTimeResultContainerBottomContainer2 = containerInUpperContainer("fullTimeResultContainerBottomContainer2", fullTimeResultBottomContainer)
// const fullTimeResultText1Container2BottomContainer = textContainerInContainer("fullTimeResultText1Container2BottomContainer", fullTimeResultContainerBottomContainer2, "X")
// const fullTimeResultText2Container2BottomContainer = textContainerInContainer("fullTimeResultText2Container2BottomContainer", fullTimeResultContainerBottomContainer2, "3.66")
//
// const fullTimeResultContainerBottomContainer3 = containerInUpperContainer("fullTimeResultContainerBottomContainer3", fullTimeResultBottomContainer)
// const fullTimeResultText1Container3BottomContainer = textContainerInContainer("fullTimeResultText1Container3BottomContainer", fullTimeResultContainerBottomContainer3, "RMD")
// const fullTimeResultText2Container3BottomContainer = textContainerInContainer("fullTimeResultText2Container3BottomContainer", fullTimeResultContainerBottomContainer3, "1.58")
//
// // Double Chance
// const doubleChanceContainer = containerInUpperContainer("doubleChanceContainer", mainContainer)
// const doubleChanceTopContainer = containerInUpperContainer("doubleChanceTopContainer", doubleChanceContainer)
// const doubleChanceTextTopContainer = textContainerInContainer("doubleChanceTextTopContainer", doubleChanceTopContainer, "Double Chance")
//
// const doubleChanceBottomContainer = containerInUpperContainer("doubleChanceBottomContainer", doubleChanceContainer)
//
// const doubleChanceContainerBottomContainer1 = containerInUpperContainer("doubleChanceContainerBottomContainer1", doubleChanceBottomContainer)
// const doubleChanceText1Container1BottomContainer = textContainerInContainer("doubleChanceText1Container1BottomContainer", doubleChanceContainerBottomContainer1, "1 or X")
// const doubleChanceText2Container1BottomContainer = textContainerInContainer("doubleChanceText2Container1BottomContainer", doubleChanceContainerBottomContainer1, "2.11")
//
// const doubleChanceContainerBottomContainer2 = containerInUpperContainer("doubleChanceContainerBottomContainer2", doubleChanceBottomContainer)
// const doubleChanceText1Container2BottomContainer = textContainerInContainer("doubleChanceText1Container2BottomContainer", doubleChanceContainerBottomContainer2, "2 or X")
// const doubleChanceText2Container2BottomContainer = textContainerInContainer("doubleChanceText2Container2BottomContainer", doubleChanceContainerBottomContainer2, "1.10")
//
// const doubleChanceContainerBottomContainer3 = containerInUpperContainer("doubleChanceContainerBottomContainer3", doubleChanceBottomContainer)
// const doubleChanceText1Container3BottomContainer = textContainerInContainer("doubleChanceText1Container3BottomContainer", doubleChanceContainerBottomContainer3, "1 or 2")
// const doubleChanceText2Container3BottomContainer = textContainerInContainer("doubleChanceText2Container3BottomContainer", doubleChanceContainerBottomContainer3, "1.20")
//
// // Teams Score
// const teamsScoreContainer = containerInUpperContainer("teamsScoreContainer", mainContainer)
// const teamsScoreTopContainer = containerInUpperContainer("teamsScoreTopContainer", teamsScoreContainer)
// const teamsScoreTextTopContainer = textContainerInContainer("teamsScoreTextTopContainer", teamsScoreTopContainer, "Both Teams To Score")
//
// const teamsScoreBottomContainer = containerInUpperContainer("teamsScoreBottomContainer", teamsScoreContainer)
//
// const teamsScoreContainerBottomContainer1 = containerInUpperContainer("teamsScoreContainerBottomContainer1", teamsScoreBottomContainer)
// const teamsScoreText1Container1BottomContainer = textContainerInContainer("teamsScoreText1Container1BottomContainer", teamsScoreContainerBottomContainer1, "Yes")
// const teamsScoreText2Container1BottomContainer = textContainerInContainer("teamsScoreText2Container1BottomContainer", teamsScoreContainerBottomContainer1, "1.71")
//
// const teamsScoreContainerBottomContainer2 = containerInUpperContainer("teamsScoreContainerBottomContainer2", teamsScoreBottomContainer)
// const teamsScoreText1Container2BottomContainer = textContainerInContainer("teamsScoreText1Container2BottomContainer", teamsScoreContainerBottomContainer2, "No")
// const teamsScoreText2Container2BottomContainer = textContainerInContainer("teamsScoreText2Container2BottomContainer", teamsScoreContainerBottomContainer2, "1.96")
//
// // Total Goals
// const totalGoalsContainer = containerInUpperContainer("totalGoalsContainer", mainContainer)
// const totalGoalsTopContainer = containerInUpperContainer("totalGoalsTopContainer", totalGoalsContainer)
// const totalGoalsTextTopContainer = textContainerInContainer("totalGoalsTextTopContainer", totalGoalsTopContainer, "Match Total Goals")
//
// const totalGoalsBottomContainer = containerInUpperContainer("totalGoalsBottomContainer", totalGoalsContainer)
//
// const totalGoalsContainerBottomContainer1 = containerInUpperContainer("totalGoalsContainerBottomContainer1", totalGoalsBottomContainer)
// const totalGoalsText1Container1BottomContainer = textContainerInContainer("totalGoalsText1Container1BottomContainer", totalGoalsContainerBottomContainer1, "No Goals")
// const totalGoalsText2Container1BottomContainer = textContainerInContainer("totalGoalsText2Container1BottomContainer", totalGoalsContainerBottomContainer1, "14.70")
//
// const totalGoalsContainerBottomContainer2 = containerInUpperContainer("totalGoalsContainerBottomContainer2", totalGoalsBottomContainer)
// const totalGoalsText1Container2BottomContainer = textContainerInContainer("totalGoalsText1Container2BottomContainer", totalGoalsContainerBottomContainer2, "1 Goal")
// const totalGoalsText2Container2BottomContainer = textContainerInContainer("totalGoalsText2Container2BottomContainer", totalGoalsContainerBottomContainer2, "5.83")
//
// const totalGoalsContainerBottomContainer3 = containerInUpperContainer("totalGoalsContainerBottomContainer3", totalGoalsBottomContainer)
// const totalGoalsText1Container3BottomContainer = textContainerInContainer("totalGoalsText1Container3BottomContainer", totalGoalsContainerBottomContainer3, "2 Goals")
// const totalGoalsText2Container3BottomContainer = textContainerInContainer("totalGoalsText2Container3BottomContainer", totalGoalsContainerBottomContainer3, "3.75")
//
// const totalGoalsContainerBottomContainer4 = containerInUpperContainer("totalGoalsContainerBottomContainer4", totalGoalsBottomContainer)
// const totalGoalsText1Container4BottomContainer = textContainerInContainer("totalGoalsText1Container4BottomContainer", totalGoalsContainerBottomContainer4, "3 Goals")
// const totalGoalsText2Container4BottomContainer = textContainerInContainer("totalGoalsText2Container4BottomContainer", totalGoalsContainerBottomContainer4, "4.22")
//
// const totalGoalsContainerBottomContainer5 = containerInUpperContainer("totalGoalsContainerBottomContainer5", totalGoalsBottomContainer)
// const totalGoalsText1Container5BottomContainer = textContainerInContainer("totalGoalsText1Container5BottomContainer", totalGoalsContainerBottomContainer5, "4+ Goals")
// const totalGoalsText2Container5BottomContainer = textContainerInContainer("totalGoalsText2Container5BottomContainer", totalGoalsContainerBottomContainer5, "2.85")
//
// // Handicap
// const handicapContainer = containerInUpperContainer("handicapContainer", mainContainer)
// const handicapTopContainer = containerInUpperContainer("handicapTopContainer", handicapContainer)
// const handicapTextTopContainer = textContainerInContainer("handicapTextTopContainer", handicapTopContainer, "Handicap")
//
// const handicapBottomContainer = containerInUpperContainer("handicapBottomContainer", handicapContainer)
//
// const handicapContainerBottomContainer1 = containerInUpperContainer("handicapContainerBottomContainer1", handicapBottomContainer)
// const handicapText1Container1BottomContainer = textContainerInContainer("handicapText1Container1BottomContainer", handicapContainerBottomContainer1, "RVP -1.5")
// const handicapText2Container1BottomContainer = textContainerInContainer("handicapText2Container1BottomContainer", handicapContainerBottomContainer1, "14.78")
//
// const handicapContainerBottomContainer2 = containerInUpperContainer("handicapContainerBottomContainer2", handicapBottomContainer)
// const handicapText1Container2BottomContainer = textContainerInContainer("handicapText1Container2BottomContainer", handicapContainerBottomContainer2, "RMD +1.5")
// const handicapText2Container2BottomContainer = textContainerInContainer("handicapText2Container2BottomContainer", handicapContainerBottomContainer2, "")
//
// // Halftime result
// const halfTimeResultContainer = containerInUpperContainer("halfTimeResultContainer", mainContainer)
// const halfTimeResultTopContainer = containerInUpperContainer("halfTimeResultTopContainer", halfTimeResultContainer)
// const halfTimeResultTextTopContainer = textContainerInContainer("halfTimeResultTextTopContainer", halfTimeResultTopContainer, "Halftime Result")
//
// const halfTimeResultBottomContainer = containerInUpperContainer("halfTimeResultBottomContainer", halfTimeResultContainer)
//
// const halfTimeResultContainerBottomContainer1 = containerInUpperContainer("halfTimeResultContainerBottomContainer1", halfTimeResultBottomContainer)
// const halfTimeResultText1Container1BottomContainer = textContainerInContainer("halfTimeResultText1Container1BottomContainer", halfTimeResultContainerBottomContainer1, "RVP")
// const halfTimeResultText2Container1BottomContainer = textContainerInContainer("halfTimeResultText2Container1BottomContainer", halfTimeResultContainerBottomContainer1, "5.23")
//
// const halfTimeResultContainerBottomContainer2 = containerInUpperContainer("halfTimeResultContainerBottomContainer2", halfTimeResultBottomContainer)
// const halfTimeResultText1Container2BottomContainer = textContainerInContainer("halfTimeResultText1Container2BottomContainer", halfTimeResultContainerBottomContainer2, "X")
// const halfTimeResultText2Container2BottomContainer = textContainerInContainer("halfTimeResultText2Container2BottomContainer", halfTimeResultContainerBottomContainer2, "2.19")
//
// const halfTimeResultContainerBottomContainer3 = containerInUpperContainer("halfTimeResultContainerBottomContainer3", halfTimeResultBottomContainer)
// const halfTimeResultText1Container3BottomContainer = textContainerInContainer("halfTimeResultText1Container3BottomContainer", halfTimeResultContainerBottomContainer3, "RMD")
// const halfTimeResultText2Container3BottomContainer = textContainerInContainer("halfTimeResultText2Container3BottomContainer", halfTimeResultContainerBottomContainer3, "2.18")
//
// document.body.append(mainContainer)

const mainContainer = document.createElement("div")
mainContainer.classList.add("mainContainer")

let obj1 = {
    fullTimeResultContainer: {
        name: "fullTimeResultContainer",
        topContainer: {
            name: "topContainer",
            textContainer: {
                name: "FullTimeResult",
                content: "Full time result",
            },
        },
        bottomContainer: {
            name: "bottomContainer",
            container1: {
                name: "container1",
                text1Container1: {
                    name: "text1Container1",
                    content: "RVP",
                },
                text2Container1: {
                    name: "text2Container1",
                    content: "5.00"
                }
            },
            container2: {
                name: "container2",
                text1Container2: {
                    name: "text1Container2",
                    content: "X",
                },
                text2Container2: {
                    name: "text2Container2",
                    content: "3.66",
                },
            },
            container3: {
                name: "container3",
                text1Container3: {
                    name: "text1Container3",
                    content: "RMD",
                },
                text2Container3: {
                    name: "text2Container3",
                    content: "1.58",
                },
            },
        },
    },
    doubleChanceContainer: {
        name: "doubleChanceContainer",
        topContainer: {
            name: "topContainer",
            textContainer: {
                name: "doubleChance",
                content: "Double Chance",
            },
        },
        bottomContainer: {
            name: "bottomContainer",
            container1: {
                name: "container1",
                text1Container1: {
                    name: "text1Container1",
                    content: "1 or X",
                },
                text2Container1: {
                    name: "text2Container1",
                    content: "2.11"
                },
            },
            container2: {
                name: "container2",
                text1Container2: {
                    name: "text1Container2",
                    content: "2 or X",
                },
                text2Container2: {
                    name: "text2Container2",
                    content: "1.10",
                },
            },
            container3: {
                name: "container3",
                text1Container3: {
                    name: "text1Container3",
                    content: "1 or 2",
                },
                text2Container3: {
                    name: "text2Container3",
                    content: "1.20",
                },
            },
        },
    },
    teamsScoreContainer: {
        name: "teamsScoreContainer",
        topContainer: {
            name: "topContainer",
            textContainer: {
                name: "teamsScore",
                content: "Both Teams To Score",
            },
        },
        bottomContainer: {
            name: "bottomContainer",
            container1: {
                name: "container1",
                text1Container1: {
                    name: "text1Container1",
                    content: "Yes",
                },
                text2Container1: {
                    name: "text2Container1",
                    content: "1.71",
                },
            },
            container2: {
                name: "container2",
                text1Container2: {
                    name: "text1Container2",
                    content: "No"
                },
                text2Container2: {
                    name: "text2Container2",
                    content: "1.96"
                },
            },
        },
    },
    totalGoalsContainer: {
        name: "totalGoalsContainer",
        topContainer: {
            name: "topContainer",
            textContainer: {
                name: "totalGoals",
                content: "Match Total Goals",
            },
        },
        bottomContainer: {
            name: "bottomContainer",
            container1: {
                name: "container1",
                text1Container1: {
                    name: "text1Container1",
                    content: "No Goals",
                },
                text2Container1: {
                    name: "text2Container1",
                    content: "14.70",
                },
            },
            container2: {
                name: "container2",
                text1Container2: {
                    name: "text1Container2",
                    content: "1 Goal",
                },
                text2Container2: {
                    name: "text2Container2",
                    content: "5.83",
                },
            },
            container3: {
                name: "container3",
                text1Container3: {
                    name: "text1Container3",
                    content: "2 Goals",
                },
                text2Container3: {
                    name: "text2Container3",
                    content: "3.75",
                },
            },
            container4: {
                name: "container4",
                text1Container4: {
                    name: "text1Container4",
                    content: "3 Goals",
                },
                text2Container4: {
                    name: "text2Container4",
                    content: "4.22",
                },
            },
            container5: {
                name: "container5",
                text1Container5: {
                    name: "text1Container5",
                    content: "4+Goals",
                },
                text2Container5: {
                    name: "text2Container5",
                    content: "2.85",
                },
            },
        },
    },
    handicapContainer: {
        name: "handicapContainer",
        topContainer: {
            name: "topContainer",
            textContainer: {
                name: "handicap",
                content: "Handicap",
            },
        },
        bottomContainer: {
            name: "bottomContainer",
            container1: {
                name: "container1",
                text1Container1: {
                    name: "text1Container1",
                    content: "RVP -1.5",
                },
                text2Container1: {
                    name: "text2Container1",
                    content: "14.78",
                },
            },
            container2: {
                name: "container2",
                text1Container2: {
                    name: "text1Container2",
                    content: "RMD +1.5",
                },
                text2Container2: {
                    name: "text2Container2",
                    content: "-",
                },
            },
        },
    },
    halfTimeResultContainer: {
        name: "halfTimeResultContainer",
        topContainer: {
            name: "topContainer",
            textContainer: {
                name: "halfTimeResult",
                content: "Halftime Result",
            },
        },
        bottomContainer: {
            name: "bottomContainer",
            container1: {
                name: "container1",
                text1Container1: {
                    name: "text1Container1",
                    content: "RVP",
                },
                text2Container1: {
                    name: "text2Container1",
                    content: "5.23",
                },
            },
            container2: {
                name: "container2",
                text1Container2: {
                    name: "text1Container2",
                    content: "X",
                },
                text2Container2: {
                    name: "text2Container2",
                    content: "2.19",
                },
            },
            container3: {
                name: "container3",
                text1Container3: {
                    name: "text1Container3",
                    content: "RMD",
                },
                text2Container3: {
                    name: "text2Container3",
                    content: "2.18",
                },
            },
        },
    },
}


function createElementsFromObject(obj, parentElement) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const item = obj[key];
                const element = document.createElement("div");
                element.classList.add(item.name);

                if (item.content) {
                    element.textContent = item.content;
                }
                parentElement.appendChild(element);

                for (let childKey in item) {
                    if (typeof item[childKey] === "object") {
                        createElementsFromObject({[childKey]: item[childKey]}, element);
                    }
                }
        }
    }
}

document.body.append(mainContainer);
createElementsFromObject(obj1, mainContainer);
