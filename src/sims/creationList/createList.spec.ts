import {createList} from "./createList";
import {list} from "./data";

const expected = [
    {
        "id": 1,
        "title": "Create person",
        "sections": [
            {
                "id": 11,
                "title": "Cat",
                "sections": []
            },
            {
                "id": 10,
                "title": "Human",
                "sections": [
                    {
                        "id": 100,
                        "title": "Blonde",
                        "sections": []
                    }
                ]
            },
            {
                "id": 13,
                "title": "Marmaid",
                "sections": []
            },
            {
                "id": 12,
                "title": "Alien",
                "sections": []
            }
        ]
    },
    {
        "id": 2,
        "title": "Create house",
        "sections": []
    }
]

describe("createList", () => {
    it("works with example data: ", () => {
        expect(createList(list)).toEqual(expected);
    })
})
