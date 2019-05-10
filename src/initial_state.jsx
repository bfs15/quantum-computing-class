
import type_filters from "./type_filters";

const initial_state = {
  type_filters: type_filters.list,
  questions: [
    {
      id: 0,
      title: "Question 1",
      type_filters: type_filters.list,
      solution: [
        {
          id: 0,
          type: "start",
          step: "H^{\\otimes 2} |01⟩",
          note: ""
        },
        {
          id: 1,
          type: "formula",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        },
        {
          id: 2,
          type: "substitution",
          step:
            "H^{\\otimes 2} |01⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.|01⟩}|x⟩)",
          note: ""
        },
        {
          id: 3,
          type: "expand",
          step: "\\frac{1}{2}(+1|00⟩ -1|01⟩ +1|10⟩ -1|11⟩)",
          note: ""
        },
        {
          id: 4,
          type: "rearrange",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        }
      ]
    },
    {
      id: 1,
      title: "Question 2",
      type_filters: type_filters.list,
      solution: [
        {
          id: 0,
          type: "start",
          step: "finish quantum website",
          note: ""
        },
        {
          id: 1,
          type: "expand",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        },
        {
          id: 2,
          type: "rearrange",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        },
        {
          id: 3,
          type: "expand",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        }
      ]
    },
    {
      id: 2,
      title: "Question 3",
      type_filters: type_filters.list,
      solution: [
        {
          id: 0,
          type: "start",
          step: "finish quantum website",
          note: ""
        },
        {
          id: 1,
          type: "expand",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        },
        {
          id: 2,
          type: "rearrange",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        },
        {
          id: 3,
          type: "expand",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        }
      ]
    },
    {
      id: 3,
      title: "Question 4",
      type_filters: type_filters.list,
      solution: [
        {
          id: 0,
          type: "start",
          step: "finish quantum website",
          note: ""
        },
        {
          id: 1,
          type: "expand",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        },
        {
          id: 2,
          type: "rearrange",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        },
        {
          id: 3,
          type: "expand",
          step:
            "H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)",
          note: ""
        }
      ]
    }
  ]
};

export default initial_state;