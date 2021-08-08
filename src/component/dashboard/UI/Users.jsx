const Users = [
    {
        timeRange: Date(),
        sectionTitle: "Product Development Team",
        sectionImg: [
            {
                donJazzy: "",
                milly: "",
                img2: "",
                img3: "",
            }

        ]
    },

    {
        timeRange: Date(),
        sectionTitle: "Social Product Review",
        sectionImg: [
            {
                donJazzy: "",
                milly: "",
                img2: "",
                img3: "",
            }

        ]
    },
    {
        timeRange: Date(),
        sectionTitle: "Product Planning",
        sectionImg: [
            {
                donJazzy: "",
                milly: "",
                img2: "",
                img3: "",
            }

        ]
    }


]

const timeAndTitle = Users.map((firstId => firstId));
const users = Users.map((secondId => secondId.sectionImg.map(newId => newId)));
export default timeAndTitle;