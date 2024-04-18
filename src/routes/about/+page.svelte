<script>
import konrad from '$lib/img/konrad.jpg';
import louis from '$lib/img/louis.jpg';
</script>

<br>
<details class="collapse bg-base-200 collapse-plus">
    <summary class="collapse-title text-xl font-medium">About the app</summary>
    <div class="collapse-content text-base"> 
        <p class="font-bold">What is our app?</p>
        <p class="mb-2">Our app, Codle, is a dedicated platform for learning and practicing programming languages. It is designed to provide a comprehensive, interactive, and user-friendly environment for both beginners and experienced coders.</p>

        <p class="font-bold">What can it do?</p>
        <p class="mb-2">Codle offers a playful approach to learning about new programming languages. With our daily quizzes you can guess programming languages that you already now and ones that are you to you. Doing so you can easily expand your horizons getting to know limitless new possibilities in new paradigms, platforms etc.</p>

        <p class="font-bold">Why use Codle?</p>
        <p>With its intuitive interface, personalized learning paths, and a supportive community, Codle makes learning to code accessible and enjoyable. Whether you're a student looking to learn your first programming language, a professional wanting to expand your coding skills, or a coding enthusiast interested in exploring new languages, Codle is the perfect platform for you.</p>
    </div>
</details>
<br>
<details class="collapse bg-base-200 collapse-plus">
    <summary class="collapse-title text-xl font-medium">About the creators</summary>
    <div class="collapse-content text-base"> 
        <p class="font-bold">The team behind the site:</p>
        <p class="mb-2">We are two engaged students, studying business informatics with a focus on software enginerring at Duale Hochschule Baden-Würtemberg in Mannheim. This website was created as part of a project for our studies.</p>
        <br>
        <div class="flex justify-start items-center space-x-16">
            <div>
                <p class="font-bold">Konrad Lorenz</p>
                <br>
                <a href="https://github.com/k-lorenz" target="_blank">
                    <div class="avatar transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={konrad} />
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <p class="font-bold">Louis Rau</p>
                <br>
                <a href="https://github.com/lraiden22" target="_blank">
                    <div class="avatar transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={louis} />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</details>