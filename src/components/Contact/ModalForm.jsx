export default function ModalForm({ setModalForm }) {
	function sendMessage() {
		alert("Message sent!")
		setModalForm(false)
	}
	return (
		<div
			class={`fixed z-40 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-90 centerAll`}
		>
			<div class="relative p-4 w-full sm:max-w-7xl">
				<form
					onSubmit={() => sendMessage()}
					action=""
					class="relative bg-white rounded-lg shadow dark:bg-gray-700"
				>
					<div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
						<h3 class="text-xl font-medium text-high">
							Send me a message
						</h3>
						<button
							onClick={() => setModalForm(false)}
							type="button"
							class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						>
							<svg
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<div class="p-6 space-y-6">
						<div class="mt-6 ">
							<div class="items-center -mx-2 md:flex">
								<div class="w-full mx-2">
									<label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
										Name
									</label>

									<input
										class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
										type="text"
										name="name"
										required
									/>
								</div>

								<div class="w-full mx-2 mt-4 md:mt-0">
									<label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
										E-mail
									</label>

									<input
										class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
										type="email"
										name="email"
										required
									/>
								</div>
							</div>

							<div class="w-full mt-4">
								<label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
									Message
								</label>

								<textarea
									class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
									name="message"
									required
								></textarea>
							</div>
						</div>
					</div>
					<div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
						<button
							type="submit"
							class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
						>
							Send
						</button>
						<button
							onClick={() => setModalForm(false)}
							type="button"
							class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
