let cool_snacks: string[] = ["apple crisp", "cookie crisp", "fruit loops"];

export function print_cool_snacks(): void {
    for (const snack of cool_snacks) {
    console.log(snack);
  }
}

print_cool_snacks();