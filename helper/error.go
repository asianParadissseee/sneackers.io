package helper

func ErroPanic(err error) {
	if err != nil {
		panic(err)
	}
}
