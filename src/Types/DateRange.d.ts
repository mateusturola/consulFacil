export interface DateRangeProps {
  initialDateState: {
    inDate?: Date | null,
    finalDate?: Date | null,
    setInDate: (date?: Date | any) => void | any,
  },
  endDataState: {
    inDate?: Date | null,
    finalDate?: Date | null,
    setFinalDate: (date?: Date | any) => void | any,
  },
}