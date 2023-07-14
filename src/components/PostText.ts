// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { defineComponent } from "vue/dist/vue.esm-bundler";
import { IContentPostTones } from "@/store/interfaces";
import { PropType } from "vue";

export const stringColorize = (
  content: string,
  contentPostTones: IContentPostTones[]
): string => {
  let coloredString = "";
  const paragrafMaker = (text: string, color = ""): string => {
    return `<span style="background: ${color}" >${text}</span>`;
  };

  let idx = 0;

  contentPostTones.forEach(({ position, tone, length }) => {
    let color = "yellow";
    if (tone < 0) {
      color = "red";
    }
    if (tone > 0) {
      color = "green";
    }
    const stringSlice = content.slice(idx, position);
    const coloredStringSlice = content.slice(position, position + length);
    coloredString += paragrafMaker(stringSlice);
    coloredString += paragrafMaker(coloredStringSlice, color);
    idx = position + length;
  });

  return (coloredString += content.slice(
    contentPostTones[contentPostTones.length - 1].position +
      contentPostTones[contentPostTones.length - 1].length
  ));
};

interface IProps {
  text: string;
  contentPostTones: IContentPostTones[];
}

export default defineComponent<{ text: string }>({
  props: {
    text: String,
    contentPostTones: Object as PropType<IContentPostTones>,
  },
  template: `
  <div v-html="getString()"></div>
`,
  methods: {
    getString(): string {
      return stringColorize(
        (this as unknown as IProps).text,
        (this as unknown as IProps).contentPostTones
      );
    },
  },
});
