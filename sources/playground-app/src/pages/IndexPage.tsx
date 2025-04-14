import { Heading, Provider } from "@react-spectrum/s2";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { classNames } from "../helpers/clsx";

export const IndexPage = () => {
  return (
    <Provider colorScheme="light" background="layer-1">
      <div className="grid min-h-dvh">
        <div
          className={classNames(
            "grid grid-rows-[auto_1fr]",
            style({ color: "gray-700" }),
          )}
        >
          <section
            className={classNames("m-4", style({ fontWeight: "title" }))}
          >
            <Heading>heading</Heading>
          </section>
          <section
            className={classNames(
              "mx-4 p-4",
              style({
                boxShadow: "emphasized",
                borderTopRadius: "xl",
                backgroundColor: "Background",
              }),
            )}
          >
            content
          </section>
        </div>
      </div>
    </Provider>
  );
};
